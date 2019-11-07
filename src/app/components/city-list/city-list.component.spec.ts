import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListComponent } from './city-list.component';
import { WeatherService } from 'src/app/services/weather.service';
import { MOCKWEATHERDATA } from 'src/app/model/city-weather.data';
import { of } from 'rxjs';
import { CityListItemComponent } from '../city-list-item/city-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentModule } from 'ngx-moment';
import { RouterModule } from '@angular/router';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { CITIES } from 'src/app/model/city.data';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CityForecastComponent } from '../city-forecast/city-forecast.component';
import { ForecastListComponent } from '../forecast-list/forecast-list.component';
import { ForecastListItemComponent } from '../forecast-list-item/forecast-list-item.component';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;
  

  beforeEach(async(() => {
    let weatherService = jasmine.createSpyObj('WeatherService', ['getWeatherDetailByCities']);
    weatherService.getWeatherDetailByCities.and.returnValue( of(MOCKWEATHERDATA));
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
      providers: [{ provide: WeatherService, useValue: weatherService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display five city-list-item on successfull call of getWeatherDetailByCities()', ()=>{
    fixture.detectChanges();
    const cityListItem = fixture.nativeElement.querySelectorAll('city-list-item');
    expect(cityListItem.length).toBe(5);
  })
});
