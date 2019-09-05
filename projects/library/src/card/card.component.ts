import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardId
  @Input() cardImageActive
  @Input() cardImage
  @Input() cardDisplaceable
  @Input() cardPaddingLeft
  @Input() cardTraditional
  @Input() cardImageWidth
  @Output() cardSelectClick= new EventEmitter();
  @Input() cardBackground

  cardHeightAuto="0px"
  cardIcon="keyboard_arrow_down"
  cardPadding="0px"
  cardWidth
  cardRowPrincipal="card-row-principal"
  cardContainerImage="card-container-image"
  cardContent="card-content"
  cardBorder="0px solid #f1f1f1"

  constructor() { }

  ngOnInit() {
    var cardId=this.cardId
    $(window).resize(function() {
      if(document.getElementById(cardId+'-card-row-displaceable').clientHeight+"px"!="0px"){
        document.getElementById(cardId+'-card-row-displaceable').style.height=document.getElementById(cardId+'-displaceable').clientHeight+40+"px"
        setTimeout(() => {
          document.getElementById(cardId+'-card-row-displaceable').style.height="auto"
        }, 200);
      }
    });
    if(!this.cardDisplaceable){
      this.cardWidth="100%"
      this.cardRowPrincipal="card-row-principal-displaceable"
      this.cardContainerImage="card-container-image-displaceable"
      this.cardContent="card-content-displaceable"
    }

    if(this.cardTraditional){
      this.cardRowPrincipal="card-row-principal"
      this.cardContainerImage="card-container-image"
      this.cardContent="card-content"
    }

    if(this.cardImageActive==false){
      this.cardPadding="20px"
    }

    if(this.cardPaddingLeft==false){
      this.cardPadding="0px"
    }

  }

  showDisplaceable(){
    if(this.cardHeightAuto=="0px"){
      if(this.cardDisplaceable){
        this.cardBorder="1px solid #f1f1f1"
      }
      if(document.getElementById(this.cardId+'-displaceable').clientHeight!=0){
        this.cardHeightAuto=document.getElementById(this.cardId+'-displaceable').clientHeight+40+"px"
        this.cardIcon="keyboard_arrow_up"

        setTimeout(() => {
          document.getElementById(this.cardId+'-card-row-displaceable').style.height="auto"
        }, 200);

      }
    }else{

      document.getElementById(this.cardId+'-card-row-displaceable').style.height=document.getElementById(this.cardId+'-displaceable').clientHeight+40+"px"

      setTimeout(() => {
        this.cardHeightAuto="0px"
        this.cardBorder="0px solid #f1f1f1"
      }, 10);
      this.cardIcon="keyboard_arrow_down"
    }
  }

  cardSelect(id){
    this.cardSelectClick.emit(id);
  }

}
