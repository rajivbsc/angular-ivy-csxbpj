import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {IAuthToken} from "./IAuthToken.d"
@Injectable({providedIn:"root"})
export class authService
{
  constructor(private http:HttpClient)
  {

  }
  getAuthToken()
  {
    console.log("Interceptor");
    ///return this.http.get<IAuthToken>("./Token.json");
  }
}