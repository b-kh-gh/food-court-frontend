import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  service_count = 0; // initialize the counter.
  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service_count++;
    this.loaderService.show();


    return next.handle(request).pipe(
      finalize(() => {
          this.service_count--;
          if (this.service_count === 0) {
            this.loaderService.hide();
          }
        }
      ));


    // return next.handle(request).pipe(
    //   finalize(() => {
    //     setTimeout(() => {
    //       console.log( "&&&&&&&&&&&&&&&&&&&&&&&******finalize******");
    //       this.loaderService.hide();
    //
    //       },3000);
    //   }));

  }
}
