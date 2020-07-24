import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { result } from "./result.interface";
@Injectable({ providedIn: "root" })

export class TestService {
  constructor(private http: HttpClient) {}
  results: result;
  getValues(): any {
    console.log("Test Files Read by Http");
    return this.http
      .get<result>("https://jsonplaceholder.typicode.com/todos/1", {
        responseType: "json"
      });
     
  }
}
