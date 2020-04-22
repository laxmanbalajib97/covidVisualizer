import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsCovidDataComponent } from './us-covid-data/us-covid-data.component';
import { UsDataDeathsComponent } from './us-data-deaths/us-data-deaths.component';
import { UsRecoveryDataComponent } from './us-recovery-data/us-recovery-data.component';

const routes: Routes = [
  {
    path: 'confirmed',
    component: UsCovidDataComponent,
  },

  { path: 'deaths', component: UsDataDeathsComponent },
  { path: 'recovery', component: UsRecoveryDataComponent },

  //by default all undefined routes go to Confirmed Cases component
  { path: '**', component: UsCovidDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
