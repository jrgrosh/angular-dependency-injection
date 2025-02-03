import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  static rootServiceCount : number = 0;
  constructor() { 
    RootService.rootServiceCount += 1;
  }

  getCount(){
    return RootService.rootServiceCount;
  }
}
