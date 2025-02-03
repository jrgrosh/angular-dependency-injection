import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinFlipService {
  private heads : boolean = false;
  constructor() {
    if(Math.random() > .5){
      this.heads = true;
    }
   }

   isHeads(): boolean{
    return this.heads;
   }
}
