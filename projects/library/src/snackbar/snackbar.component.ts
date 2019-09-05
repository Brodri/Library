import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  @Input() snackbarId
  @Input() snackbarColor
  @Input() snackbarContent
  @Input() snackbarOtherColor
  @Input() snackbarBorder

  constructor() { }

  ngOnInit() {
  }
  
  snackbarShow(){
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
