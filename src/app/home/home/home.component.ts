import { Component, Input, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { ChartModule } from 'primeng/chart';
import { Chart1Component } from '../chart-1/chart-1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, Chart1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  list1 = {
    labels: ['A', 'B', 'C'],
    values: [300, 50, 100]
  };


}
