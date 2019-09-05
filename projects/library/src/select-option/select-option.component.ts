import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit {

  @Input () selectOptionId
  @Input () selectOptionContent
  @Input () selectOptionPlaceholder
  @Input () selectOptionIdFinal
  @Input () selectOptioRequired
  @Input () selectOptionArray
  @Input () selectOptionImage
  @Input () selectOptionType
  @Input () selectOptionIdOption
  @Input() selectOptionWithContent=true
  @Input() selectOptionImageInput
  @Input() selectOptionImageInputInitial
  @Input() selectOptionWidthForce
  @Input() selectOptionWidthForceContent
  @Input() selectOptionDisabled=true
  @Output () selectOptionSelected= new EventEmitter();
  @Input() selectOptionCenter=false
  @Input() selectOptionWidthTitle


  selectOptionColumns1="90% 10%"
  selectOptionColumns2="20% 80%"
  selectOptionSelectedId=false
  selectOptionInputTag="none"
  selectOptionInput="none"
  selectOpcionSelectedVar="block"
  selectOption1
  selectOptioImage
  selectOptionPlaceholderInit
  searchText
  selectOptionWidth
  selectOptionCenterDisplay
  selectOptionJustifyContent
  errorColor = ''
  selectOptionErrorMsg

  constructor(public domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectOptionPlaceholderInit=this.selectOptionPlaceholder
    this.searchText=this.selectOptionPlaceholder
    if(this.selectOptionType==1){
      this.selectOptionErrorMsg = "30px"
      this.selectOption1=true
    }else{
      this.selectOption1=false
      this.selectOptionInputTag="block";
      this.selectOptionWidth="100%"
      this.selectOptionErrorMsg = "0px"
    }

    if(this.selectOptionImage==false){
      this.selectOptionColumns2="100%"
    }
    if(this.selectOptionImageInputInitial){
      this.selectOptionImageInputInitialFunction()
    }

    if(this.selectOptionCenter){
      this.selectOptionCenterDisplay="inline-block"
      this.selectOptionJustifyContent="center"
    }
  }

  selectOptionImageInputInitialFunction(){
    if(document.getElementById(this.selectOptionId)){
      document.getElementById(this.selectOptionId).style.background="url("+this.selectOptionImageInputInitial+") no-repeat scroll 2px 4px"
        document.getElementById(this.selectOptionId).style.paddingLeft=" 54px"
        document.getElementById(this.selectOptionId).style.backgroundSize="30px"
        document.getElementById(this.selectOptionId).style.backgroundPositionX="8px"
        document.getElementById(this.selectOptionId).style.backgroundPositionY="6px"
        document.getElementById(this.selectOptionId).style.minWidth="188px"
    }else{
      setTimeout(() => {
        this.selectOptionImageInputInitialFunction()
      }, 100);
    }
  }

  selectOpcionSelected(){
    if(this.selectOptionType==1){
      this.selectOptionWidth="100%"
      if(this.selectOpcionSelectedVar=="block"){
        this.selectOptionInputTag="block";
        this.selectOptionInput="block";
        this.selectOpcionSelectedVar="none"
        this.searchText=""
      }else{
        this.selectOptionInput="none"
        this.selectOpcionSelectedVar="block"
        this.selectOptionInputTag="none";
      }
      this.inputSimpleCorrect(this.selectOptionId)
    }else{
      this.selectOptionInput="none"
      this.selectOpcionSelectedVar="block"
      this.searchText=""
    }
  }

  selectOpcionClose(selectOptionId){
    if(this.selectOptionType==1){
      this.selectOptionWidth=""
      if(this.selectOpcionSelectedVar=="block"){
        this.selectOptionInputTag="block";
        this.selectOptionInput="block";
        this.selectOpcionSelectedVar="none"
        this.searchText=""
      }else{
        this.selectOptionInput="none"
        this.selectOpcionSelectedVar="block"
        this.selectOptionInputTag="none";
      }
    }else{
      this.selectOptionInput="none"
      this.selectOpcionSelectedVar="block"
      this.searchText=this.selectOptionPlaceholder
      if(this.selectOptionPlaceholder==this.selectOptionPlaceholderInit){
        this.searchText=""
        if(this.selectOptioRequired){
          this.inputSimpleError(selectOptionId)
        }
        this.selectOptionPlaceholder=this.selectOptionPlaceholderInit
      }
    }
  }

  changeOpcionSelected(data){
    if(this.selectOptionType==2){
      if(data.length>0){
        this.selectOptionInputTag="block";
        this.selectOptionInput="block";
        this.selectOpcionSelectedVar="none"
        this.searchText=""
      }else{
        this.selectOptionInput="none"
        this.selectOpcionSelectedVar="block"
      }
    }
  }

  selectOptionNew(id, image, option, name){
    this.selectOptionSelected.emit(option);
    this.selectOptionPlaceholder=name
    this.selectOptionIdFinal=id
    this.selectOptionIdOption=option
    this.selectOptioImage=image
    this.selectOptionSelectedId=true
    if(this.selectOptionImage==true){
      this.selectOptionColumns1="20% 70% 10%"
    }
    if(this.selectOptionType==1){
      this.selectOptionWidth=""
      this.selectOptionInput="none"
      this.selectOptionInputTag="none"
      this.selectOpcionSelectedVar="block"
    }else{
      if(this.selectOptionImageInput==true){
        document.getElementById(this.selectOptionId).style.background="url("+image+") no-repeat scroll 2px 4px"
        document.getElementById(this.selectOptionId).style.paddingLeft=" 54px"
        document.getElementById(this.selectOptionId).style.backgroundSize="30px"
        document.getElementById(this.selectOptionId).style.backgroundPositionX="8px"
        document.getElementById(this.selectOptionId).style.backgroundPositionY="6px"
        document.getElementById(this.selectOptionId).style.minWidth="188px"
      }
      this.searchText=name
      this.selectOptionInput="none"
      this.selectOpcionSelectedVar="block"
    }
  }

  selectOptionFocus(selectOptionId){
    if(this.searchText==this.selectOptionPlaceholder){
      if(this.selectOptionPlaceholder==this.selectOptionPlaceholderInit){
        this.searchText=""
      }
    }else{

    }
  }

  selectOptionFocusOut(selectOptionId){
    var data=$('#'+selectOptionId).val();
    console.log($('#'+selectOptionId).val())
    if(data=="" || data==this.selectOptionPlaceholderInit){
      if(this.selectOptioRequired){
        this.inputSimpleError(selectOptionId)
      }
      setTimeout(() => {
          this.searchText=this.selectOptionPlaceholder
      },100)
    }else{
      this.inputSimpleCorrect(selectOptionId)
    }
  }

  inputSimpleError(selectOptionId){
    this.errorColor = 'Red'
    $('#'+selectOptionId).addClass('select-option-error');
    $('#'+selectOptionId+'-error').css('visibility','visible');
    $('#'+selectOptionId+'-error').css('font-size','10px');
    $('#'+selectOptionId+'-logo').css('width','10px');
  }

  inputSimpleCorrect(selectOptionId){
    this.errorColor = ''
    $('#'+selectOptionId).removeClass('select-option-error')
    $('#'+selectOptionId+'-error').css('visibility','hidden');
    $('#'+selectOptionId+'-error').css('font-size','0px');
    $('#'+selectOptionId+'-logo').css('width','0px');
  }

}
