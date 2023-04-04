import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = localStorage.getItem('U');
    if (localToken) {
      request= request.clone({headers: request.headers.set('Authorization', 'bearer' + localToken)});

    }
    console.log("ur;---->" + request.url);
    return next.handle(request);
  }
}
