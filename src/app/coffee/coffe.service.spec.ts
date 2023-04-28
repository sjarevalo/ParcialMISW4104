/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import { HttpClientModule } from '@angular/common/http';
describe('Service: Coffe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CoffeeService]
    });
  });

  it('should ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
