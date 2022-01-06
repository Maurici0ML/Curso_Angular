import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { nombreApelidoPattern, emailPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre   : [ '', [ Validators.required, Validators.pattern( this.validatorService.nombreApelidoPattern ) ]  ],
    email    : [ '', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [this.emailValidator] ],
    username : [ '', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password : ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
    
  }, {
    validators: [ this.validatorService.camposIguales('password','password2') ]   
  });
  
  get emailErrorMsg(): string {

    const errors = this.miFormulario.controls['email'].errors;
    if ( errors?.required ) {
      return 'Email obligatorio';
    } else if( errors?.pattern ) {
      return 'El formato del email no es valido';
    } else if( errors?.emailTomado ) {
      return 'El email ya fue tomado';
    }

    //PENSE QUE SE IBA A PODER ASÍ PERO NO SE PUDO:(
    // switch (errors) {
    //   case errors?.required:
    //     return 'Email Obligatorio';
      
    //   case errors?.pettern:
    //     return 'El formato del email no es valido';

    //   case errors?.emailTomado:
    //     return 'El email ya fue tomado';
    // }
     
    return '';
  }
  

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Mauricio Morales',
      email: 'test1@test.com',
      username: 'Maus3r',
      password: '123456',
      password2: '123456',
    });

  }

  campoNoValido( campo: string ) {
    return this.miFormulario.controls[campo].invalid 
           && this.miFormulario.controls[campo].touched;
  }

  // emailRequired() {
  //   return this.miFormulario.controls['email'].errors?.required
  //          && this.miFormulario.controls['email'].touched;
  // }

  // emailPattern() {
  //   return this.miFormulario.controls['email'].errors?.pattern
  //          && this.miFormulario.controls['email'].touched;
  // }

  // emailTomado() {
  //   return this.miFormulario.controls['email'].errors?.emailTomado
  //          && this.miFormulario.controls['email'].touched;
  // }

  submitFormulario() {

    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }
}
