import { Injectable } from '@angular/core';
import { Jewel } from '../shared/dish';
import { EARRINGS } from '../shared/earrings';
@Injectable({
  providedIn: 'root'
})
export class EarringsService {
getDishes(): Jewel[] {
    return EARRINGS;
  }
  constructor() { }
}
