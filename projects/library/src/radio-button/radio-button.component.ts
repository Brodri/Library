import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  @Input() radioButtonContent
  @Input() radioButtonColor
  @Input() radioButtonId
  @Input() radioButtonName

  constructor() { }

  ngOnInit() {
  }

  radioButtonChange(){
    $("#"+this.radioButtonId).append('<style>[type="radio"]:checked + label:before,[type="radio"]:not(:checked) + label:after{background:'+this.radioButtonColor+' !important;border: 1px solid '+this.radioButtonColor+';}</style>');
    $("#"+this.radioButtonId).append('<style>[type="radio"]:checked + label:before,[type="radio"]:checked + label:before{border: 1px solid '+this.radioButtonColor+' !important;}</style>');
  }

}
