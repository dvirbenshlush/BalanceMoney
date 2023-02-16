import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card/card-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
  
    DashBoardComponent
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
