import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: ['./form-simple.component.scss']
})
export class FormSimpleComponent implements OnInit {

  @Input() formSimpleId
  @Input() formSimpleTitle;
  @Input() formSimpleDescription;

  constructor() { }

  ngOnInit() {
  }

}
