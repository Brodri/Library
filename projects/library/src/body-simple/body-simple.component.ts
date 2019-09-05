import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'body-simple',
  templateUrl: './body-simple.component.html',
  styleUrls: ['./body-simple.component.scss']
})
export class BodySimpleComponent implements OnInit {

  @Input() bodySimpleId

  constructor() { }

  ngOnInit() {
  }

}
