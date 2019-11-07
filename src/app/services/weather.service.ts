import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private baseURL = environment.baseURL;
  private KEY = environment.OWKEY;

  constructor(
    private httpClient : HttpClient
  ) { }
  
  getWeatherDetailByCities(cities: City[]){
    const ids = cities.map((city)=>city.id).join();
    return this.httpClient.get(`${this.baseURL}/group?id=${ids}&units=metric&appid=${this.KEY}`);
  }

  getForeCastDetailByCity(city: City){
    const {id} = city;
    return this.httpClient.get(`${this.baseURL}/forecast?id=${id}&units=metric&appid=${this.KEY}`);
  }

}
