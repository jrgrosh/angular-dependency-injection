export class FactoryService {
    constructor(
        private isHeads : boolean
    ){
    }

    produceWidget(){
        if(this.isHeads){
            return "Washers"
        }
        return "Bolts"
    }
}