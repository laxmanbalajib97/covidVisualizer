import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CovidDataService } from '../covid-data.service';
@Component({
  selector: 'app-us-recovery-data',
  templateUrl: './us-recovery-data.component.html',
  styleUrls: ['./us-recovery-data.component.css'],
})
export class UsRecoveryDataComponent implements OnInit {
  chart = []; // This will hold our chart info

  constructor(private _coviddata: CovidDataService) {}

  ngOnInit() {
    this._coviddata.timeSeriesCovidData().subscribe((res) => {
      let ctx = document.getElementById('recoveryChart');

      let usDataCasesConfirmed = res['US'].map((res) => res.confirmed);
      let usDataCasesDeaths = res['US'].map((res) => res.deaths);
      let usDataCasesRecovered = res['US'].map((res) => res.recovered);

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
              label: 'Recovered',
              data: usDataCasesRecovered,
              fill: false,
              backgroundColor: 'rgb(50,205,50)',
              borderColor: 'rgba(50,205,50,0.5)',
            },
          ],
        },
      });
    });
  }
}
