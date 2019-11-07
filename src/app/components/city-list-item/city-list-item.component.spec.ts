import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListItemComponent } from './city-list-item.component';
import { CityForecastComponent } from '../city-forecast/city-forecast.component';
import { CityListComponent } from '../city-list/city-list.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { ForecastListComponent } from '../forecast-list/forecast-list.component';
import { ForecastListItemComponent } from '../forecast-list-item/forecast-list-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentModule } from 'ngx-moment';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { MOCKWEATHERDATA } from 'src/app/model/city-weather.data';
import { CityWeather } from 'src/app/model/city-weather';
import * as moment from 'moment';
import { TitleCasePipe } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('CityListItemComponent', () => {
  let component: CityListItemComponent;
  let fixture: ComponentFixture<CityListItemComponent>;

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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListItemComponent);
    component = fixture.componentInstance;
    component.weather = <CityWeather><any>MOCKWEATHERDATA.list[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render time', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];
    const time =  <HTMLElement>fixture.nativeElement.querySelector('.city_time');
    expect(time.innerText).toBe(`Last updated - ${moment(sample.dt * 1000).format('hh:mmA')}`);
  });

  it('should render city name', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];
    const name =  <HTMLElement>fixture.nativeElement.querySelector('.city_name');
    expect(name.innerText).toBe(sample.name);
  });

  it('should render weather description', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];
    const description =  <HTMLElement>fixture.nativeElement.querySelector('.weather_desc');
    expect(description.innerText).toBe(new TitleCasePipe().transform(sample.weather[0].description));
  });

  it('should render temperature', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];
    const temperature =  <HTMLElement>fixture.nativeElement.querySelector('.main_temperature');
    expect(temperature.innerText.trim()).toBe(`${sample.main.temp} °C`);
  });

  it('should render wind', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];
    const wind =  <HTMLElement>fixture.nativeElement.querySelector('.wind_speed');
    expect(wind.innerText.trim()).toBe(`${sample.wind.speed} km/h`);
  });


  it('can click city-list-item link in template', () => {
    const sample = <CityWeather><any>MOCKWEATHERDATA.list[0];

    let href = fixture.debugElement.query(By.css('a')).nativeElement
    .getAttribute('href');

    expect(href).toEqual(`${sample.id}`);
  });
});
