import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.scss']
})
export class StateSelectComponent implements OnInit {

  @Input() stateSelectWidth
  @Input() stateSelectArray=[
    {"title":"Enable", "name":"Enable", "circleColor":"#79c942", "changeColor":"#ecffdf", "id":"state1"},
    {"title":"Disabled", "name":"Disabled","circleColor":"#ec2c26", "changeColor":"#ffe4e5", "id":"state2"},
    {"title":"Pending", "name":"Pending","circleColor":"#f19221", "changeColor":"#ffecd8", "id":"state3"}
  ]
  @Input() stateSelectPrincipal={"title":"Example Status", "name":"Example Status", "circleColor":"#cccccc", "id":"statePrincipal"}
  @Output() stateSelectClick= new EventEmitter();
  

  stateSelectData=this.stateSelectPrincipal
  
  height=0;
  border="0";
  background

  constructor() { }

  ngOnInit() {
  }

  StateSelectAccordion(){
    if(this.height==0){
      this.background="#F7F8FA"
      this.height=150;
      this.border="1px solid #cccccc";
    }else{
      this.background="#ffffff"
      this.height=0;
      this.border="0";
    }
  }

  changeStyle(id, color){
    document.getElementById(id).style.background = color
  }

  ReturnStyle(id){
    document.getElementById(id).style.background = '#ffffff'
  }

  selectState(circleColor, name, title){
    this.stateSelectPrincipal={"title":title, "name":name, "circleColor":circleColor, "id":this.stateSelectPrincipal["id"]}
    this.stateSelectData={"title":title, "name":name, "circleColor":circleColor, "id":this.stateSelectPrincipal["id"]}
    this.StateSelectAccordion()
    this.stateSelectClick.emit(this.stateSelectPrincipal);
  }

}
