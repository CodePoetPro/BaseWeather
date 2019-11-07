import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastComponent } from './city-forecast.component';
import { ForecastListComponent } from '../forecast-list/forecast-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { ForecastListItemComponent } from '../forecast-list-item/forecast-list-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MomentModule } from 'ngx-moment';
import { CityListComponent } from '../city-list/city-list.component';
import { CityListItemComponent } from '../city-list-item/city-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { MOCKFORECASTDATA } from 'src/app/model/forecast-weather.data';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { CITIES } from 'src/app/model/city.data';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;
  let activatedRoute;
  beforeEach(async(() => {
    let weatherService = jasmine.createSpyObj('WeatherService', ['getForeCastDetailByCity']);
    weatherService.getForeCastDetailByCity.and.returnValue( of(MOCKFORECASTDATA));
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
      providers: [ { provide: WeatherService, useValue: weatherService }, {provide: ActivatedRoute, useClass: ActivatedRouteStub}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    activatedRoute.testParamMap = { id: CITIES[0].id };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
