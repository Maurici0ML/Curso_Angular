import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'PREDETERMINADO',
    precio: 1000,
    existencias: 1000
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    // console.log(this.miFormulario);
    console.log("Posteo correcto");

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.touched && 
           this.miFormulario?.controls.producto?.invalid;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched &&
           this.miFormulario?.controls.precio?.invalid;
  }

}
