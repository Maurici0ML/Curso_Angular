import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from "rxjs/operators";

import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interface';



@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region  : ['', [Validators.required]],
    pais    : ['', [Validators.required]],
    frontera: ['', [Validators.required]],
  });

  // Llenar selectores
  regiones : string[]    = [];
  paises   : PaisSmall[] = [];
  // fronteras: string[]    = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor( private fb: FormBuilder,
               private paisesService: PaisesService) { }

  ngOnInit(): void {

    this.regiones = this.paisesService.regiones;

    /*CUANDO CAMBIE LA REGIÓN, SE HACE LA PETICIÓN
    ESTO ES LA FORMA LARGA QUE ENTRA EN CALLBACK HELLS, SIN OPERADORES DE RXJS
    this.miFormulario.get('region')?.valueChanges
    .subscribe( region => {
      console.log(region);
      this.paisesService.getPaisesPorRegion( region )
      .subscribe( paises => {
        console.log(paises);
        this.paises = paises;
      });
    });*/
    
    //Cuando cambia la region (empleando operadores de rxjs)...
    this.miFormulario.get('region')?.valueChanges
      .pipe( 
        tap( (_) => {
          this.miFormulario.get('pais')?.reset('');
          this.cargando = true;
        }),
        switchMap( region => this.paisesService.getPaisesPorRegion( region ) )
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando = false;
      });

    // Cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( (_) => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap(codigo => this.paisesService.getPaisPorCca3( codigo )),
          switchMap( pais => this.paisesService.getPaisesPorBordes( pais?.borders! ) )
        )
        .subscribe( paises => {
          console.log(paises);
          this.fronteras = paises;
          this.cargando = false;
        });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
