import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router,
               private authService: AuthService) { }

  login() {

    //Ir al backend y verificar el usuario (regresar que el usuario exista)
    //un usuario DEBE DE ESTAR EN UN SERVICIO para que esté disponible en toda la aplicación

    this.authService.login()
    .subscribe( auth => {
      console.log( auth );

      if( auth.id ) {
        
        this.router.navigate(['./heroes']);

      }
    });


  }

  

}
