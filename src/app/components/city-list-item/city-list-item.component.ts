import { Component, OnInit, Input } from '@angular/core';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { CityWeather } from 'src/app/model/city-weather';

@Component({
  selector: 'city-list-item',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.scss']
})
export class CityListItemComponent implements OnInit {

  faWind = faWind;
  faTemperatureHigh = faTemperatureHigh;
  @Input() weather:CityWeather;

  constructor() { }

  ngOnInit() {
  }

}
