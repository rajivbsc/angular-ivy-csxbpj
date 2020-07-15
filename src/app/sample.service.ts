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
    
    console.log("Test Files Read by Http");
    return this.http.get("https://stackblitz.com/edit/angular-ivy-csxbpj?file=%2fsrc%2fapp%2fTest.txt");
  }
}