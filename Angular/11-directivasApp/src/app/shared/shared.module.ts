import { NgModule } from '@angular/core';
import { ErrorMsjDirective } from './directives/error-msj.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMsjDirective,
    CustomIfDirective
  ],
  exports: [
    ErrorMsjDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
