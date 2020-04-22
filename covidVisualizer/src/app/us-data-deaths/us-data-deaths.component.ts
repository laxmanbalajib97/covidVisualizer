import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-us-data-deaths',
  templateUrl: './us-data-deaths.component.html',
  styleUrls: ['./us-data-deaths.component.css'],
})
export class UsDataDeathsComponent implements OnInit {
  chart = []; // This will hold our chart info

  constructor(private _coviddata: CovidDataService) {}

  ngOnInit() {
    this._coviddata.timeSeriesCovidData().subscribe((res) => {
      let ctx = document.getElementById('deathsChart');

      let usDataCasesDeaths = res['US'].map((res) => res.deaths);

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
              label: 'Deaths',
              data: usDataCasesDeaths,
              fill: false,
              backgroundColor: 'rgb(196,29,43)',
              borderColor: 'rgba(196,29,43,0.5)',
            },
          ],
        },
      });
    });
  }
}
