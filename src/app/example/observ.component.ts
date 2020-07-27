import { Component,Input,Output, EventEmitter,OnChanges, SimpleChanges } from "@angular/core"
import {Operator,fromEvent,from } from 'rxjs'
@Component({
  selector:'zippy',
  template:`<div id="dippy" class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <div> {{visible}}</div>
    </div>
    <div>fgfd</div>
  </div>
  `
})
export class obserComponent implements OnChanges{
  @Output() open = new EventEmitter<any>();  
  @Output() close = new EventEmitter<any>(); 
  @Input() exps:number=35; 
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
      this.exps = 30;
      console.log('parent close emit');
       this.close.emit(null);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
   console.log('Onchanges call');
  for (let propName in changes) {
    let chng = changes[propName];
    let cur  = JSON.stringify(chng.currentValue);
    let prev = JSON.stringify(chng.previousValue);
    console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
}