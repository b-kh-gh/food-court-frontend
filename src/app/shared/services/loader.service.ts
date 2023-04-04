import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() {
    this.isLoading$.subscribe(event => console.log("constructor:isloading"+event));
  }

  isLoading$ = new BehaviorSubject<boolean>(true);



  show(): void {
    this.isLoading$.next(true);
    this.isLoading$.subscribe(event => console.log("******show**********"+event));
  }

  hide(): void {
    this.isLoading$.next(false);
    this.isLoading$.subscribe(event => console.log("******hide**********"+event));
  }
}
