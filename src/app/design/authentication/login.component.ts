
import { Component } from '@angular/core'
import { loginService } from '../../Design/authentication/login.service'

@Component
(
  {
    selector:'login',
    templateUrl:'./login.component.html'
  }
)

class loginComponent
{
  constructor(private loginservice:loginService)
  {

  }
  OnSubmit()
  {

  }
}