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

  }
}