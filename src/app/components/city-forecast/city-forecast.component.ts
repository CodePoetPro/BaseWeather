import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { CITIES } from 'src/app/model/city.data';
import { City } from 'src/app/model/city';
import { ActivatedRoute } from '@angular/router';
import { ForecastWeather } from 'src/app/model/forecast-weather';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  city: City;
  forecasts: ForecastWeather[] = [];
  faArrowLeft = faArrowLeft;
  loading: boolean;
  isLoadingForecasts: boolean;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.city = this.getCity(id);
    this.getForecast();
  }

  getCity(id): City {
    return CITIES.find((city)=> city.id == id);
  }

  getForecast = () => {
    this.isLoadingForecasts = true;
    this.weatherService.getForeCastDetailByCity(this.city)
    .subscribe((res:any)=>{
      this.forecasts = res.list;
      this.isLoadingForecasts = false;
    },err=>{
      this.isLoadingForecasts = false;
    })
  }

}
