import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  
  @Input() slideToggleId
  @Input() slideToggleRequired
  @Input() slideToggleColor
  @Input() slideToggleBorderColor
  @Input() slideSimpleDisabled = false
  @Input() slideToggleCheck
  @Input() valueSlideToggle
  @Output() slideToggleSelect= new EventEmitter();
 
  
  valueSlideToggleColor
  valueSlideToggleBorderColor
  valueCheckbox:boolean;

  constructor() { }

  ngOnInit() {
    this.slideToggleInit()
  }

  slideToggleInit(){
    if(document.getElementById(this.slideToggleId)){
      if(this.slideToggleCheck){
        document.getElementById(this.slideToggleId).click()
      }
    }else{
      setTimeout(() => {
        this.slideToggleInit()
      }, 100);
    }
  }

  slideToggleChange(value){
    this.slideToggleSelect.emit(value);
    if(value){
      this.valueSlideToggleColor=this.slideToggleColor
      this.valueSlideToggleBorderColor='1px solid '+this.slideToggleBorderColor
      $('head').append('<style>input:checked + .slide-toggle-slider:before{background-color: '+this.slideToggleBorderColor+' !important;}</style>');
      this.slideToggleCorrect(this.slideToggleId)
    }else{
      this.valueSlideToggleColor=""
      this.valueSlideToggleBorderColor=""
      this.slideToggleError(this.slideToggleId)
    }
  }

  slideToggleError(slideToggleId){
    $('#'+slideToggleId).addClass('checkbox-error');
    $('#'+slideToggleId+'-error').css('visibility','visible');
    $('#'+slideToggleId+'-error').css('font-size','10px');
    $('#'+slideToggleId+'-logo').css('width','10px');
    $('#'+slideToggleId+'-label').css('color','red');
  }

  slideToggleCorrect(slideToggleId){
    $('#'+slideToggleId).removeClass('checkbox-error')
    $('#'+slideToggleId+'-error').css('visibility','hidden');
    $('#'+slideToggleId+'-error').css('font-size','0px');
    $('#'+slideToggleId+'-logo').css('width','0px');
    $('#'+slideToggleId+'-label').css('color','');
  }
  // close error and correct

}
