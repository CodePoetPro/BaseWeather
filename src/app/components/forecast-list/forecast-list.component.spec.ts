import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListComponent } from './forecast-list.component';
import { CityForecastComponent } from '../city-forecast/city-forecast.component';
import { CityListComponent } from '../city-list/city-list.component';
import { CityListItemComponent } from '../city-list-item/city-list-item.component';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { ForecastListItemComponent } from '../forecast-list-item/forecast-list-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentModule } from 'ngx-moment';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MOCKFORECASTDATA } from 'src/app/model/forecast-weather.data';

describe('ForecastListComponent', () => {
  let component: ForecastListComponent;
  let fixture: ComponentFixture<ForecastListComponent>;

  beforeEach(async(() => {

    let weatherService = jasmine.createSpyObj('WeatherService', ['getForeCastDetailByCity']);

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
        HttpClientModule,
        RouterModule
      ],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastListComponent);
    component = fixture.componentInstance;
    component.forecasts = MOCKFORECASTDATA.list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
