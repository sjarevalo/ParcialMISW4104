/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeListComponent } from './coffee-list.component';
import { CoffeeService } from '../coffee.service';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [ CoffeeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
