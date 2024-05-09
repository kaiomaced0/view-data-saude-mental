import { Component, OnInit, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-2',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-2.component.html',
  styleUrls: ['./chart-2.component.css']
})
export class Chart2Component implements OnInit {
  @Input() data1!: { [key: string]: number };
  @Input() descricao?: string;
  @Input() tipo?: string;
  data: any;
  options: any;

ngOnInit() {
  // Remover a chave "Total" e extrair os labels e values
  const { Total, ...chartData } = this.data1;
  const labels = Object.keys(chartData);
  const values = Object.values(chartData);


  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  this.data = {
    labels: labels,
    datasets: [
      {
        label: 'Procedimentos Realizados',
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#86796D', '#9ABACF', '#66323D', '#954BC0', '#FFA256'],
      }
    ]
  };

  this.options = {
    cutout: '60%',
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    }
  };
}
}
