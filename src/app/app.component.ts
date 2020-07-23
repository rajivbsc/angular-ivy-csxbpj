"use strict";
import { Component, VERSION,DirectiveDecorator } from '@angular/core';
import {customPipes} from './custompipe.pipe'
import { HttpClient } from '@angular/common/http';
import {TestService} from './sample.service'
import { IAuthToken } from './IAuthToken';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value1 = 10;
  value2 = 20;
 title:any='testnowrouting';
  constructor(private http:HttpClient,testService:TestService)
  {
    
  }
  onOpen($event)
  {
console.log('open');
  }
   onClose($event)
  {
    console.log('close');
  }
  pass($event)
  {
    
  }
}
