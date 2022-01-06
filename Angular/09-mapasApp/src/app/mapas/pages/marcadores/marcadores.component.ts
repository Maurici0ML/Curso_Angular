import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .list-group {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }

    li {
      cursor: pointer;
    }

    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomlvl: number = 15;
  center: [number, number] = [ -99.14810571414594, 19.355207068505152 ];
  
  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomlvl
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Hola Mundo'

    // new mapboxgl.Marker({
    //   element: markerHtml
    // })
    //   .setLngLat( this.center )
    //   .addTo(this.mapa);

    this.readLocalStrg();

  }

  agregarMarcador(){

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat( this.center )
      .addTo( this.mapa );

    this.marcadores.push( {
      color: color,
      marker: nuevoMarcador
    } );

    this.saveMrkrsLocalStrg();

    nuevoMarcador.on('dragend', () => {
        
      this.saveMrkrsLocalStrg();
      
    });

  }

  irMarcador( marker: mapboxgl.Marker ){    
    
    this.mapa.flyTo({
      center: marker.getLngLat()
    });

  }

  saveMrkrsLocalStrg(){
    
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( marcador => {
      const color = marcador.color;
      const { lng, lat } = marcador.marker!.getLngLat();
      lngLatArr.push({
        color: color,
        centro: [ lng, lat ]
      });

    });

    localStorage.setItem( 'marcadores', JSON.stringify(lngLatArr) );

  }

  readLocalStrg() {

    if (!localStorage.getItem('marcadores')) {
      return; 
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach( marcador => {

      const nuevoMarcador = new mapboxgl.Marker({
        draggable: true,
        color: marcador.color
      })
        .setLngLat( marcador.centro! )
        .addTo( this.mapa );
    
      this.marcadores.push( {
        marker: nuevoMarcador,
        color: marcador.color
      } );

      nuevoMarcador.on('dragend', () => {
        
        this.saveMrkrsLocalStrg();
        
      });

    });
  }

  borrarMarcador( i: number ) {
    
    this.marcadores[i].marker?.remove();
    this.marcadores.splice( i, 1 );
    this.saveMrkrsLocalStrg();
  }

}
