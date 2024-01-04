import { Component } from '@angular/core';
import { CakeService } from '../service/cake.service';
import { Cake } from '../model/cake';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent {
  cakes:Cake[] = [];
  ingredients:string[] =[];
  
	constructor(private service:CakeService) {
	}

  params = {
    filter: {
      ingredients:''
    },
    sort:'name',
    sortDirection:'asc'
  }

  ngOnInit() {
    this.getCakes()
    this.getIngredients()
  }

 

  getCakes() {
    this.service.getCakes(this.params).subscribe({
      next:(data:Cake[]) =>{
        this.cakes=data;
    
      }
    })
  }

  getIngredients() {
    this.service.getIngredients().subscribe({
      next:(data:string[]) =>{
        this.ingredients=data;
        console.log(this.ingredients)
      }
    })
  }

}
