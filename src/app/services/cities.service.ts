import { Injectable } from '@angular/core';
import { CITIES } from '../model/city.data';
import { City } from '../model/city';



@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  getCities() : Promise<City[]> {
    return Promise.resolve(CITIES);
  }

}
