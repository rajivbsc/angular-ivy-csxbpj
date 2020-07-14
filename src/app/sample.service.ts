import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root',})
export class TestService
{
  constructor(private http: HttpClient)
  {

  }
  getValues()
  {
    debugger;
    console.log("Test Files Read by Http");
    return this.http.get("https://github.com/angular-ivy-csxbpj/app/Test.txt");
  }
}