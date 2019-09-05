import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'input-simple',
  templateUrl: './input-simple.component.html',
  styleUrls: ['./input-simple.component.scss']
})
export class InputSimpleComponent implements OnInit {

  @Input() inputSimpleContent
  @Input() inputSimpleData
  @Input() inputSimpleId
  @Input() inputSimpleRequired
  @Input() inputSimpleEmail
  @Input() inputSimpleNumber
  @Input() inputSimplePassword
  @Input() inputSimpleIniPlaceholder
  @Input() inputSimpleWidth
  @Input() inputSimpleWidthInput
  @Input() inputSimpleMarginRight
  @Input() inputSimpleMinWidth
  @Input() inputSimpleDisabled
  @Input() inputSimpleNotSpace

  inputSimpleFocusOut=true
  

  constructor() { }

  ngOnInit() {
  }



  //focus and focusout
  inputSimpleChangeFocus(inputSimpleId){
    var value=$('#'+inputSimpleId).val();
    if(value==this.inputSimpleIniPlaceholder){
      var value=$('#'+inputSimpleId).val('')
    }

    if(!this.inputSimpleRequired && !this.inputSimpleEmail && !this.inputSimpleNumber && !this.inputSimplePassword){
      this.inputSimpleCorrect(inputSimpleId)
    }

  }

  inputSimpleChangeFocusOut(inputSimpleId){
    this.inputSimpleFocusOut=false;
    var data=$('#'+inputSimpleId).val();
    if(data==""){
      var data=$('#'+inputSimpleId).val(this.inputSimpleIniPlaceholder)
      
      if(this.inputSimpleRequired){
        this.inputSimpleError(inputSimpleId);
      }

      if(this.inputSimpleEmail){
        this.inputSimpleError(inputSimpleId);
      }

      if(this.inputSimpleNumber){
        this.inputSimpleError(inputSimpleId);
      }

      if(this.inputSimplePassword){
        this.inputSimpleError(inputSimpleId);
      }

    }else{
      this.inputSimpleChange(data, inputSimpleId);
    }
  }
  // close focus and focusout

  

  // change data input
  inputSimpleChange(data, inputSimpleId){
    if(!this.inputSimpleFocusOut){

      if(!this.inputSimpleRequired && !this.inputSimpleEmail && !this.inputSimpleNumber && !this.inputSimplePassword){
        this.inputSimpleCorrect(inputSimpleId)
      }

      if(this.inputSimpleRequired){
        this.inputSimpleError(inputSimpleId);
        if(data!=""){
          this.inputSimpleCorrect(inputSimpleId)
        }
      }
      
      if(this.inputSimpleEmail){
        if(this.inputSimpleValidateEmail(data, inputSimpleId)){
          this.inputSimpleCorrect(inputSimpleId)
        }else{
          this.inputSimpleError(inputSimpleId)
        }
      }

      if(this.inputSimpleNumber){
        if(this.inputSimpleValidateNumber(data, inputSimpleId)){
          this.inputSimpleCorrect(inputSimpleId)
        }else{
          this.inputSimpleError(inputSimpleId)
        }
      }

      if(this.inputSimplePassword){
        if(this.inputSimpleValidatePassword(data, inputSimpleId)){
          this.inputSimpleCorrect(inputSimpleId)
        }else{
          this.inputSimpleError(inputSimpleId)
        }
      }
      if(this.inputSimpleNotSpace){
        if(this.inputSimpleValidateNotSpace(data, inputSimpleId)){
          this.inputSimpleCorrect(inputSimpleId)
        }else{
          this.inputSimpleError(inputSimpleId)
        }
      }

    }

  }
  // close change data input



  // error and correct
  inputSimpleError(inputSimpleId){
    $('#'+inputSimpleId).addClass('input-simple-error');
    $('#'+inputSimpleId+'-error').css('visibility','visible');
    $('#'+inputSimpleId+'-error').css('font-size','10px');
    $('#'+inputSimpleId+'-logo').css('width','10px');
  }

  inputSimpleCorrect(inputSimpleId){
    $('#'+inputSimpleId).removeClass('input-simple-error')
    $('#'+inputSimpleId+'-error').css('visibility','hidden');
    $('#'+inputSimpleId+'-error').css('font-size','0px');
    $('#'+inputSimpleId+'-logo').css('width','0px');
  }
  // close error and correct

  // Function of validation
  inputSimpleValidateEmail(data, inputSimpleId) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(data).toLowerCase());
  }

  inputSimpleValidateNumber(data, inputSimpleId) {
    var reg = /^\d+$/
    return reg.test(String(data).toLowerCase());
  }

  inputSimpleValidatePassword(data, inputSimpleId) {
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,16}$/
    return reg.test(data);
  }
  inputSimpleValidateNotSpace(data, inputSimpleId) {
    var reg = /^\S/
    return reg.test(data);
  }
  
  // close function of validation

}