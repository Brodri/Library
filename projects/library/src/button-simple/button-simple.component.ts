import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'button-simple',
  templateUrl: './button-simple.component.html',
  styleUrls: ['./button-simple.component.scss']
})
export class ButtonSimpleComponent implements OnInit {
  //commit component
  @Input() simpleButtonId
  @Input() simpleButtonContent
  @Input() simpleButtonColor
  @Input() simpleButtonBorder="transparent"
  @Input() simpleButtonTextColor
  @Input() simpleButtonDisabled
  @Input() simpleButtonColorDisable
  @Output() simpleButtonAction = new EventEmitter()
  simpleButtonWidth
  simpleChangeButtonWidth
  simpleButtonColorOrigin

  simpleButtonStyle="simple-button"

  constructor() { }
  //change
  ngOnInit() {
    this.simpleButtonColorOrigin=this.simpleButtonColor
    if(this.simpleButtonDisabled){
      this.simpleButtonStyle="simple-button simple-button-disabled"
      this.simpleButtonColor=this.simpleButtonColorDisable
    }
  }

  buttonSimpleChangeAgain(){
    setTimeout(() => {
      this.simpleButtonColor=this.simpleButtonColorOrigin
    }, 200);
  }

  simpleButtonActionFunction(){
    this.simpleButtonColor=this.simpleButtonColorDisable
    this.buttonSimpleChangeAgain()
    this.simpleButtonAction.emit();
  }

  simpleButtonVerification(){
    if(this.simpleButtonDisabled){
      this.simpleButtonStyle="simple-button simple-button-disabled"
      this.simpleButtonColor=this.simpleButtonColorDisable
    }else{
      this.simpleButtonColor=this.simpleButtonColorOrigin
    }
  }


}
