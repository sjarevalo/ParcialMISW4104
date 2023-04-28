import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffes: Array<Coffee> = [];
  constructor(private coffeeService: CoffeeService) { }
  getCoffees(): void{
    this.coffeeService.getCoffes().subscribe(resp => this.coffes = resp )
  }
  ngOnInit() {
    this.getCoffees();
  }

}
