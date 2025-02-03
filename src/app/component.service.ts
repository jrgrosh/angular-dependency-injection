import { Injectable } from "@angular/core";

@Injectable()
export class ComponentService {
    static ComponentServiceCount : number = 0;
    constructor(){
        ComponentService.ComponentServiceCount+= 1;
    }

    getCount(){
        return ComponentService.ComponentServiceCount;
    }
}