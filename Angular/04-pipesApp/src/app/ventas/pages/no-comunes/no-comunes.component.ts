import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect 
  nombre: string = "Mauricio";
  genero: string = "masculino";
  //Objeto que nos permite mapear los distintos casos que puede tener el Pipe
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Mauricio', 'Carmelo'];
  //Objeto que nos permite mapear los distintoa casos que puede tener el Pipe
  clientesMapa = {
    '=0': 'no tenemos nigún cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarCliente(){
    this.nombre = 'Ximena';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Mauricio',
    edad: 17,
    direccion: 'Edomex'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);

  })

}
