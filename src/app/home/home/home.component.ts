import { Component, Input, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { ChartModule } from 'primeng/chart';
import { Chart1Component } from '../chart-1/chart-1.component';
import { Chart2Component } from '../chart-2/chart-2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, Chart1Component, Chart2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  list1 = {
    'Janeiro_2023': 3067,
    'Fevereiro_2023': 2888,
    'Março_2023': 2632,
    'Abril_2023': 128,
    'Maio_2023': 107,
    'Junho_2023': 153,
    'Julho_2023': 11690,
    'Agosto_2023': 7839,
    'Setembro_2023': 9021,
    'Outubro_2023': 4515,
    'Dezembro_2023': 441,
    'Total': 42481
  };

}
