import { Inject, Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { authService } from "./auth.service";
import { Observable } from "rxjs";
@Injectable({
  providedIn:'root'
})

export class AuthInterceptor //implements HttpInterceptor
{
  constructor(private authService:authService)
  {

  }
  // intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
  //   // console.log(req.url);
  //   console.log("Interceptor Checking First After Test Files Read by Http");
  //   return next.handle(req);
  // };
}
//   {
//     var token = this.authService.getAuthToken();
//   }
// }