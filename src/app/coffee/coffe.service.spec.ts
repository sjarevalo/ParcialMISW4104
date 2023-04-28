/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';

describe('Service: Coffe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService]
    });
  });

  it('should ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
