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
  origen: number = 0;
  blend: number = 0;
  constructor(private coffeeService: CoffeeService) { }
  getCoffees(): void{
    this.coffeeService.getCoffes().subscribe(resp => {
      this.coffes = resp
      this.coffes.forEach(cf =>{
        if(cf.tipo.toLowerCase() === 'blend'){
          this.blend++
        }else if(cf.tipo.toLowerCase().includes('origen')){
          this.origen++
        }
       })
     })

  }

  ngOnInit() {
    this.getCoffees();
  }

}
