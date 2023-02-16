import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card/card-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
  
    DashBoardComponent,
        ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  exports: [
    MatCardModule
  ]
})
export class FeaturesModule { }
