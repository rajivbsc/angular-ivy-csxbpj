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
  Token:IAuthToken;
  constructor(private http:HttpClient,testService:TestService)
  {
    
   var str = testService.getValues().subscribe((data: IAuthToken) => this.Token = {
        Token: data['Token'],
    });
   alert(this.Token.Token);
   // console.log(ExponentialStrengthPipe.transform(10,20));
  }
}
