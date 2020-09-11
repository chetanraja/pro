import { Injectable } from '@angular/core';
import { Jewel } from '../shared/dish';
import { DISHES } from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})

export class DishService {
getDishes(): Jewel[] {
    return DISHES;
  }
  constructor() { }
}
