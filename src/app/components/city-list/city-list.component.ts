import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { CITIES } from 'src/app/model/city.data';
import { CityWeather } from 'src/app/model/city-weather';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit, OnDestroy {
  citiesWeather: CityWeather[] = [];
  isLoadingWeather: boolean;
  subscription: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherDetail();
  }

  getWeatherDetail(){
    this.isLoadingWeather = true;
    this.subscription = this.weatherService.getWeatherDetailByCities(CITIES)
      .subscribe((res:any) => {
        this.isLoadingWeather = false;
        this.citiesWeather = res.list;
      },err=>{
        this.isLoadingWeather = false;
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

 

  

}
