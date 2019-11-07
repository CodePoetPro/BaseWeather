import { Component, OnInit, Input } from '@angular/core';
import { ForecastWeather } from 'src/app/model/forecast-weather';

@Component({
  selector: 'forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent implements OnInit {

  constructor() { }

  @Input() forecasts: ForecastWeather[];
  @Input() loading: boolean;
  @Input() reload: Function;

  ngOnInit() {
    
  }

}
