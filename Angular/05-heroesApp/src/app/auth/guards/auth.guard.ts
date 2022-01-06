import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private AuthService: AuthService, 
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.AuthService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if(!estaAutenticado) {
                    this.router.navigate(['./auth/login'])
                  }
                } )
              );

      // console.log(route, "CanActivate");
      // console.log(state, "CanActivate");
      
      // if ( this.AuthService.auth.id ) {

      //   return true;
        
      // }  
      
      // console.log("Bloqueado por el authGuard - canActivate");
      // return false;

  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.AuthService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => {
                  if(!estaAutenticado) {
                    this.router.navigate(['./auth/login'])
                  }
                } )
      );

      // console.log(route);
      // console.log(segments);

      // if (this.AuthService.auth.id) {
      
      //   return true;

      // }

      // console.log("Bloqueado por el authGuard - canLoad");
      // return false;
  }
}
