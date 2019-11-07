import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { CITIES } from '../model/city.data';

describe('CitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });

  it('should have a function called getCities and return a promise of City[]', ()=>{
    const service: CitiesService = TestBed.get(CitiesService);
    service.getCities()
      .then((data)=>{
        expect(data).toBe(CITIES);
      })
  })
});
