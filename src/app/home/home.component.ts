import { Component, OnInit,Input } from '@angular/core';
import { Jewel } from '../shared/dish';
import { EARRINGS } from '../shared/earrings'; 
import { EarringsService  } from '../services/earrings.service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 @Input()
  dish: Jewel;
   dishes: Jewel[];
   
   currentIndex: any = -1;
  showFlag: any = false;
   imageObject: Array<object>=EARRINGS;
   showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  constructor(private earringsService: EarringsService) { }

  ngOnInit() {
    this.dishes = this.earringsService.getDishes();
  }

}
