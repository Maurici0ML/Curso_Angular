import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = "mauricio";
  nombreUpper: string = "MAURICIO";
  nombreCompleto: string = "mAurIciO MoRAlEs";

  fecha: Date = new Date(); //Es el día de hoy.
  
}
