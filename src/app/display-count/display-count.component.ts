import { Component, OnInit } from '@angular/core';
import { RootService } from '../root.service';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-display-count',
  templateUrl: './display-count.component.html',
  styleUrls: ['./display-count.component.css'],
  providers: [ComponentService]
})
export class DisplayCountComponent implements OnInit {
  rootServiceCount = -1;
  componentServiceCount = -1;
  
  constructor(
    private rootService: RootService,
    private componentService: ComponentService
  ){

  }

  ngOnInit(){
    this.rootServiceCount = this.rootService.getCount();
    this.componentServiceCount = this.componentService.getCount();
  }
}
