import { Component } from '@angular/core';
import { SlideShow } from 'src/app/model/slideshow';
import { CakeService } from 'src/app/service/cake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slideShow: SlideShow[] = [];
	constructor(private service: CakeService) {
	}

  ngOnInit(){
    this.getSlideShow()
  }

  getSlideShow() {
    this.service.getSlideshow().subscribe({
      next:(data:SlideShow[]) => {
        this.slideShow=data;
      }
    })
  }

}
