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
 
  constructor(private http:HttpClient,testService:TestService)
  {
    
  }
}
