import { NgModule,Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS,HttpClient,HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpClientModule  } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from '../.'
import { HelloComponent } from './hello.component'
import {customPipes} from './custompipe.pipe'
import { authService } from './auth.service'
import {AuthInterceptor} from './auth.interceptors'
import {TestService} from './sample.service'
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,customPipes ],
  bootstrap:    [ AppComponent ],
  providers:[HttpClientModule,HttpClient,TestService,authService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]  
})
export class AppModule { }