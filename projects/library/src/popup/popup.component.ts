import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() popupId
  @Input() popupColor
  @Input() popupTitle
  @Input() popupContent
  @Input() popupCancelButton = true
  @Input() popupConfirmButton = true
  @Output() popupSelectClick= new EventEmitter();

  popupCover=false
  popupTop
  popupMarginTop

  constructor() { }

  ngOnInit() {
  }

  popupSelect(){
    this.popupSelectClick.emit();
  }

}
