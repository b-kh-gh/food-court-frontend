import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService,private router :Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.userObservable.pipe(map((user)=>{
      if(!user.token) {
        this.router.navigate(['login']);
        return false;
      }
      else return true;
    }));

    // return this.userService.userObservable.subscribe((user) => {
    //  if(!user) return false;
    //  else return true;
    // });
  }

  // canActivate(): boolean {
  //   return true;
  // }
}
