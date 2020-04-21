import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidDataService } from './covid-data.service';
import { UsCovidDataComponent } from './us-covid-data/us-covid-data.component';
import { UsDataDeathsComponent } from './us-data-deaths/us-data-deaths.component';
import { UsRecoveryDataComponent } from './us-recovery-data/us-recovery-data.component';

@NgModule({
  declarations: [AppComponent, UsCovidDataComponent, UsDataDeathsComponent, UsRecoveryDataComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CovidDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
