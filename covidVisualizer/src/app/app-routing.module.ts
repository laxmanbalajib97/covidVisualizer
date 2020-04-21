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
  //{ path: '**', component: UsCovidDataComponent },
  { path: 'deaths', component: UsDataDeathsComponent },
  { path: 'recovery', component: UsRecoveryDataComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
