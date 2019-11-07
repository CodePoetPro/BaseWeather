import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityListItemComponent } from './components/city-list-item/city-list-item.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentModule } from 'ngx-moment';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { ForecastListItemComponent } from './components/forecast-list-item/forecast-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityListItemComponent,
    CityForecastComponent,
    WeatherIconComponent,
    ForecastListComponent,
    ForecastListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
