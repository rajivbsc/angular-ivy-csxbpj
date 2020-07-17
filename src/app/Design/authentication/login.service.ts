import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {} from '@angular/Ob'
@Injectable(
  {
    providedIn:'root'
  }
)
export class loginService
{
  _http:HttpClient
  constructor(private http: HttpClient)
  {
   this._http = http;
  }
  authenticate(username:string,password:string)
  {
    return this._http.get<boolean>('/ValidateLogin.js');
  }
}