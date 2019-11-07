import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconComponent } from './weather-icon.component';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right icon', ()=>{
    const sample = "10n";
    component.icon = "10n";
    fixture.detectChanges();
    const icon =  fixture.nativeElement.querySelector('img');
    expect(icon.src).toBe(`http://openweathermap.org/img/wn/${sample}@2x.png`);
  })

});
