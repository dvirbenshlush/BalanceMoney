import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './features/news/news.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from '../../src/app/features/dashboard/dashboard.component';
import { ChartsComponent } from '../../src/app/features/charts/charts.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

import * as Highcharts from 'highcharts';
import xrange from 'highcharts/modules/xrange';
xrange(Highcharts);
// Exporting(Highcharts);

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DashboardComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// function Exporting(Highcharts: typeof Highcharts) {
  // throw new Error('Function not implemented.');
// }

