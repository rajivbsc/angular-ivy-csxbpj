"use strict";
import { Component, VERSION,DirectiveDecorator } from '@angular/core';
import {customPipes} from './custompipe.pipe'
import { HttpClient } from '@angular/common/http';
import {TestService} from './sample.service'
import { IAuthToken } from './IAuthToken';
import {result} from './result.interface'
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
 results:result
  constructor(private http:HttpClient,testService:TestService)
  {
   testService.getValues().subscribe(res => {
        this.results = res;
         console.log( this.results.title);
      });;
   /console.log(this.results.userId);
  
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
