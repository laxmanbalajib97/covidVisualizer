import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-us-covid-data',
  templateUrl: './us-covid-data.component.html',
  styleUrls: ['./us-covid-data.component.css'],
})
export class UsCovidDataComponent implements OnInit {
  chart = []; // This will hold our chart info

  constructor(private _coviddata: CovidDataService) {}

  ngOnInit() {
    this._coviddata.timeSeriesCovidData().subscribe((res) => {
      let ctx = document.getElementById('myChart');

      let usDataCasesConfirmed = res['US'].map((res) => res.confirmed);

      //slice only month and day
      //everyone knows its 2020
      let Date_data = res['US'].map((res) => res.date.slice(5));

      this.chart = new Chart(ctx, {
        type: 'line',
        options: {
          legend: {
            display: true,
          },
        },
        data: {
          labels: Date_data,
          datasets: [
            {
              label: 'Cases Confirmed',
              data: usDataCasesConfirmed,
              fill: false,
              backgroundColor: 'rgb(25,118,210)',
              borderColor: 'rgba(25,118,210,0.5)',
            },
          ],
        },
      });
    });
  }
}
