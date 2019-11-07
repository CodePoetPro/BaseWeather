import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleCasePipe } from '@angular/common';
import { ForecastListItemComponent } from './forecast-list-item.component';
import { CityForecastComponent } from '../city-forecast/city-forecast.component';
import { CityListComponent } from '../city-list/city-list.component';
import { CityListItemComponent } from '../city-list-item/city-list-item.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { ForecastListComponent } from '../forecast-list/forecast-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentModule } from 'ngx-moment';
import { RouterModule } from '@angular/router';
import { MOCKFORECASTDATA } from 'src/app/model/forecast-weather.data';
import { ForecastWeather } from 'src/app/model/forecast-weather';
import * as moment from 'moment';

describe('ForecastListItemComponent', () => {
  let component: ForecastListItemComponent;
  let fixture: ComponentFixture<ForecastListItemComponent>;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        CityForecastComponent,
        CityListComponent,
        CityListItemComponent,
        WeatherIconComponent,
        ForecastListComponent,
        ForecastListItemComponent
      ],
      imports: [
        AppRoutingModule,
        FontAwesomeModule,
        MomentModule,
        RouterModule
      ],
      providers: [],
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListItemComponent);
    component = fixture.componentInstance;
    component.forecast = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render time', () => {
    const sample = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    const time = <HTMLElement>fixture.nativeElement.querySelector('.city_time');
    expect(time.innerText).toBe(moment(sample.dt * 1000).calendar());
  });

  it('should render time full', () => {
    const sample = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    const time = <HTMLElement>fixture.nativeElement.querySelector('.city_time_full');
    expect(time.innerText).toBe(moment(sample.dt * 1000).format('dddd, MMMM Do YYYY'));
  });

  it('should render weather description', () => {
    const sample = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    const description = <HTMLElement>fixture.nativeElement.querySelector('.weather_desc');
    expect(description.innerText).toBe(new TitleCasePipe().transform(sample.weather[0].description));
  });

  it('should render temperature', () => {
    const sample = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    const temperature = <HTMLElement>fixture.nativeElement.querySelector('.main_temperature');
    expect(temperature.innerText.trim()).toBe(`${sample.main.temp} °C`);
  });

  it('should render wind', () => {
    const sample = <ForecastWeather><any>MOCKFORECASTDATA.list[0];
    const wind = <HTMLElement>fixture.nativeElement.querySelector('.wind_speed');
    expect(wind.innerText.trim()).toBe(`${sample.wind.speed} km/h`);
  });
});
