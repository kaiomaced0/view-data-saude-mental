import { Component, OnInit, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-1',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-1.component.html',
  styleUrls: ['./chart-1.component.css']
})
export class Chart1Component implements OnInit {

  @Input() data1!: { labels: string[], values: number[] };

  data: any;
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: [...this.data1.labels],
          datasets: [
              {
                  label: 'Dataset 1',
                  data: this.data1.values,
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
