import { BehaviorSubject } from "rxjs";

export class Store<T> extends BehaviorSubject<T> {
    constructor(){
        super(null);
    }
}