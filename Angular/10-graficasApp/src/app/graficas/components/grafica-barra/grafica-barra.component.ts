import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F6412C', hoverBackgroundColor: '#F6412C' },
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series B', backgroundColor: '#EB35AC', hoverBackgroundColor: '#EB35AC' },
      // { data: [ 8, 38, 88, 21, 5, 66, 100 ], label: 'Series C', backgroundColor: '#AE2CF6', hoverBackgroundColor: '#AE2CF6' }
  ];

  constructor() { }

  ngOnInit(): void {

    this.barChartType = this.horizontal? 'horizontalBar':this.barChartType;

  }

}
