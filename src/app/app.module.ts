import { NgModule,Provider, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS,HttpClient,HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpClientModule  } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {orderModule} from './design/order/order.module'
import { AppComponent } from './app.component'
import { HelloComponent } from './hello.component'
import {customPipes} from './custompipe.pipe'
import { authService } from './auth.service'
import {AuthInterceptor} from './auth.interceptors'
import {TestService} from './sample.service'
import {RouterModule,RouterOutlet} from '@angular/router'
import {appRoutingModule} from './app-routing.module'
import {obserComponent} from './example/observ.component'
//import {result} from './result.interface'
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,orderModule,appRoutingModule],
  declarations: [ AppComponent, HelloComponent,customPipes,obserComponent ],
  bootstrap:    [ AppComponent ],
  providers:[HttpClientModule,HttpClient,TestService,authService]//{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]  
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule {}
