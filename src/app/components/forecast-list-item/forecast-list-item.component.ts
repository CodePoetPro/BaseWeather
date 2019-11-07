import { Component, OnInit, Input } from '@angular/core';
import { ForecastWeather } from 'src/app/model/forecast-weather';
import { faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'forecast-list-item',
  templateUrl: './forecast-list-item.component.html',
  styleUrls: ['./forecast-list-item.component.scss']
})
export class ForecastListItemComponent implements OnInit {


  faWind = faWind;
  faTemperatureHigh = faTemperatureHigh;
  
  @Input() forecast:ForecastWeather;

  constructor() { }

  ngOnInit() {
  }

}
