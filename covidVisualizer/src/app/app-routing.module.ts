import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsCovidDataComponent } from './us-covid-data/us-covid-data.component';

const routes: Routes = [
  {
    path: 'bar-chart',
    component: UsCovidDataComponent,
  },
  { path: '**', component: UsCovidDataComponent },
  { path: 'texas', component: UsCovidDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
