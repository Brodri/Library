import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'textarea-simple',
  templateUrl: './textarea-simple.component.html',
  styleUrls: ['./textarea-simple.component.scss']
})
export class TextareaSimpleComponent implements OnInit {

  @Input() textareaSimpleContent
  @Input() textareaSimpleData
  @Input() textareaSimpleId
  @Input() textareaSimpleRequired
  @Input() textareaSimpleEmail
  @Input() textareaSimpleNumber
  @Input() textareaSimpleIniPlaceholder
  @Input() textareaSimpleDisabled = false
  textareaSimpleFocusOut=true

  constructor() { }
  //al iniciar decide el background del elemento
    ngOnInit() {
    }



  //focus and focusout
  textareaSimpleChangeFocus(textareaSimpleId){
    var value=$('#'+textareaSimpleId).val();
    if(value==this.textareaSimpleIniPlaceholder){
      var value=$('#'+textareaSimpleId).val('')
    }

    if(!this.textareaSimpleRequired && !this.textareaSimpleEmail && !this.textareaSimpleNumber){
      this.textareaSimpleCorrect(textareaSimpleId)
    }

  }

  textareaSimpleChangeFocusOut(textareaSimpleId){
    this.textareaSimpleFocusOut=false;
    var data=$('#'+textareaSimpleId).val();
    if(data==""){
      var data=$('#'+textareaSimpleId).val(this.textareaSimpleIniPlaceholder)
      
      if(this.textareaSimpleRequired){
        this.textareaSimpleError(textareaSimpleId);
      }

      if(this.textareaSimpleEmail){
        this.textareaSimpleError(textareaSimpleId);
      }

      if(this.textareaSimpleNumber){
        this.textareaSimpleError(textareaSimpleId);
      }

    }else{
      this.textareaSimpleChange(data, textareaSimpleId);
    }
  }
  // close focus and focusout

  

  // change data textarea
  textareaSimpleChange(data, textareaSimpleId){
    if(!this.textareaSimpleFocusOut){

      if(!this.textareaSimpleRequired && !this.textareaSimpleEmail && !this.textareaSimpleNumber){
        this.textareaSimpleCorrect(textareaSimpleId)
      }

      if(this.textareaSimpleRequired){
        this.textareaSimpleError(textareaSimpleId);
        if(data!=""){
          this.textareaSimpleCorrect(textareaSimpleId)
        }
      }

      if(this.textareaSimpleEmail){
        if(this.textareaSimpleValidateEmail(data, textareaSimpleId)){
          this.textareaSimpleCorrect(textareaSimpleId)
        }else{
          this.textareaSimpleError(textareaSimpleId)
        }
      }

      if(this.textareaSimpleNumber){
        if(this.textareaSimpleValidateNumber(data, textareaSimpleId)){
          this.textareaSimpleCorrect(textareaSimpleId)
        }else{
          this.textareaSimpleError(textareaSimpleId)
        }
      }
    }
  }
  // close change data textarea



  // error and correct
  textareaSimpleError(textareaSimpleId){
    $('#'+textareaSimpleId).addClass('textarea-simple-error');
    $('#'+textareaSimpleId+'-error').css('visibility','visible');
    $('#'+textareaSimpleId+'-error').css('font-size','10px');
    $('#'+textareaSimpleId+'-logo').css('width','10px');
  }

  textareaSimpleCorrect(textareaSimpleId){
    $('#'+textareaSimpleId).removeClass('textarea-simple-error')
    $('#'+textareaSimpleId+'-error').css('visibility','hidden');
    $('#'+textareaSimpleId+'-error').css('font-size','0px');
    $('#'+textareaSimpleId+'-logo').css('width','0px');
  }
  // close error and correct



  // Function of validation
  textareaSimpleValidateEmail(data, textareaSimpleId) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(data).toLowerCase());
  }

  textareaSimpleValidateNumber(data, textareaSimpleId) {
    var reg = /^\d+$/
    return reg.test(String(data).toLowerCase());
  }
  // close function of validation

}
