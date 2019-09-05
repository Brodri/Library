import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  
  @Input() checkboxId
  @Input() checkboxRequired
  @Input() checkboxContent
  @Input() checkboxColor
  @Input() checkboxDisabled
  @Input() checkboxData=true;
  @Input() backgroundCheckbox
  @Input() borderCheckbox
  
  constructor() { }

  ngOnInit() {
    if(this.checkboxData==true){
      this.checkboxChange()
    }
  }

  checkboxChange(){
    if(!this.checkboxData){
      
      if(!this.checkboxDisabled){
        this.backgroundCheckbox=""
      }
      this.borderCheckbox=""
      if(this.checkboxRequired){
        this.borderCheckbox="1px solid red"
        this.checkboxError(this.checkboxId)
      }
    }else{
      if(this.checkboxRequired){
        this.borderCheckbox=""
        this.checkboxCorrect(this.checkboxId)
      }
      this.backgroundCheckbox=this.checkboxColor
      this.borderCheckbox="1px solid "+this.checkboxColor
    }
  }

  // error and correct
  checkboxError(checkboxId){
    $('#'+checkboxId).addClass('checkbox-error');
    $('#'+checkboxId+'-error').css('visibility','visible');
    $('#'+checkboxId+'-error').css('font-size','10px');
    $('#'+checkboxId+'-logo').css('width','10px');
    $('#'+checkboxId+'-label').css('color','red');
  }

  checkboxCorrect(checkboxId){
    $('#'+checkboxId).removeClass('checkbox-error')
    $('#'+checkboxId+'-error').css('visibility','hidden');
    $('#'+checkboxId+'-error').css('font-size','0px');
    $('#'+checkboxId+'-logo').css('width','0px');
    $('#'+checkboxId+'-label').css('color','');
  }
  // close error and correct

}
