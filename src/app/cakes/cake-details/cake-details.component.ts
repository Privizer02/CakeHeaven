import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Cake } from 'src/app/model/cake';
import { CakeService } from 'src/app/service/cake.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent {
  cakeId:number =0;
  cake:Cake = new Cake();
	constructor(private service:CakeService,private route:ActivatedRoute) {
	}

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.cakeId=params['id'];
    })
    this.getCake()
  }
  getCake() {
    this.service.getCake(this.cakeId).subscribe({
      next:(data:Cake) => {
        this.cake=data;
      }
    })
  }
}
