import { Component,Input,Output, EventEmitter } from "@angular/core"
import {Operator,fromEvent,from } from 'rxjs'
@Component({
  selector:'zippy',
  template:`<div id="dipp" class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <div> {{visible}}</div>
    </div>
    <div>fgfd</div>
  </div>
  `
})
export class obserComponent{
  @Output() open = new EventEmitter<any>();  
  @Output() close = new EventEmitter<any>(); 
  @Input() exps:number; 
  visible:boolean=true;
  constructor(){

  }
  toggle()
  {
    this.visible=!this.visible;
    if(this.visible)
    {
      console.log('parent open emit' + this.exps);  
      this.open.emit(null);
    }
    else 
    {
      console.log('parent close emit');
       this.close.emit(null);
    }
  }
}