import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private _http: HttpClient) {}

  //subscribes to data from COVID19 api hosted by https://github.com/pomber
  timeSeriesCovidData() {
    return this._http
      .get('https://pomber.github.io/covid19/timeseries.json')
      .pipe(map((result) => result));
  }
}
