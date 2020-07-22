"use strict";
import { Component, VERSION,DirectiveDecorator } from '@angular/core';
import {customPipes} from './custompipe.pipe'
import { HttpClient } from '@angular/common/http';
import {TestService} from './sample.service'
import { IAuthToken } from './IAuthToken';
import * as tokens from  '../design/token.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value1 = 10;
  value2 = 20;
  //Token:IAuthToken;
 kens:any;
  constructor(private http:HttpClient,testService:TestService)
  {
    
    this.http.get('https://stackblitz.com/edit/angular-ivy-csxbpj?file=src%2Fdesign%2Ftoken.json').subscribe(res=>{
    this.kens = res;
    }
    );
    // for(let t in tokens)
    // {
    //      console.log(t);
    // }
  //  var str = testService.getValues().subscribe((data: IAuthToken) => this.Token = {
  //       Token: data['Token'],
  //   });
  //  alert(this.Token.Token);
   // console.log(ExponentialStrengthPipe.transform(10,20));
  }
}
