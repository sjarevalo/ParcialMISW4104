import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from '../app/coffee/coffee-list/coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent, CoffeeListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ParcialMISW4104'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ParcialMISW4104');
  });

});
