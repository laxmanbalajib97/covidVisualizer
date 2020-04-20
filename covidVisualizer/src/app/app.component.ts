import { Component } from '@angular/core';
import { CovidDataService } from './covid-data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'covidVisualizer';
  chart = []; // This will hold our chart info

  constructor(private _coviddata: CovidDataService) {}

  ngOnInit() {
    this._coviddata.timeSeriesCovidData().subscribe((res) => {
      let ctx = document.getElementById('myChart');

      let US_data = res['US'].map((res) => res.confirmed);

      //slice only month and day
      //everyone knows its 2020
      let Date_data = res['US'].map((res) => res.date.slice(5));

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Date_data,
          datasets: [
            {
              label: 'US Covid cases confirmed',
              data: US_data,
              fill: false,
              backgroundColor: 'rgb(25,118,210)',
              borderColor: 'rgba(25,118,210,0.7)',
            },
          ],
        },
      });
    });
  }
}
