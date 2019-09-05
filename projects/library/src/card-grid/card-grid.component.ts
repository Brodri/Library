import { Component, OnInit, Input, HostListener, OnChanges, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

  @Input() cardGridId="card-grid-1"
  @Input() cardGridData=[
    {"title":"Apps","name":"Apps","image":"assets/images/apps-card-grid.svg","description1":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
    {"title":"Users","name":"Users","image":"assets/images/users-card-grid.svg","description1":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
    {"title":"Administration","name":"Holding And Operations","image":"assets/images/administration.png","description1":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
    {"title":"Uses Cases","name":"Global Usecases","image":"assets/images/global-use-cases-card-grid.svg","description1":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198},
    {"title":"Reports","name":"Moving Operation To Other Holding","image":"assets/images/moving-operation-card-grid.svg","description1":"The form in case its necesary Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.","sizeImage":"51","sizeBox":198}
  ];
  @Input() cardGridSize=[
    {"screen":"init","row":"5"},
    {"screen":1300,"row":"4"},
    {"screen":920,"row":"3"},
    {"screen":768,"row":"2"},
    {"screen":440,"row":"1"},
  ]
  @Input() cardGridLight
  @Output() optionSelectCardGrid= new EventEmitter();

  cardGridClass="card-grid-grids"
  cardGridMarginHorizontal=0
  cardGridSizeTitlePadding
  cardGridInit=0
  cardGridVisibility="hidden"

  constructor() { }

  ngOnInit() {
    if(document.getElementById(this.cardGridId)){
      this.cardGridVisibility="visible"
      var cardGridSize=document.getElementById(this.cardGridId).offsetWidth
      this.cardGridCalcPadding(cardGridSize)
      this.cardGridCalcSizeTitle()
      this.cardGridCalcSizeDescription()
      this.cardGridInit=1
    }else{
      setTimeout(() => {
        this.ngOnInit()
      }, 100);
    }
    
    if(!this.cardGridLight){
      this.cardGridClass="card-grid-grids-no-light"
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      $( "#"+this.cardGridId ).bind("resize", function(){
      });
    var cardGridSize=document.getElementById(this.cardGridId).offsetWidth
    this.cardGridCalcPadding(cardGridSize)
  }

  ngOnChanges(){
    if(this.cardGridInit==1){
      var cardGridSize=document.getElementById(this.cardGridId).offsetWidth
      setTimeout(() => { 
        this.cardGridCalcPadding(cardGridSize)
        this.cardGridCalcSizeTitle()
        this.cardGridCalcSizeDescription()
      }, 100);
    }
  }


  cardGridCalcPadding(cardGridSize){
    var cardGridRow;
    for(var i=(this.cardGridSize.length-1); i>=0; i--){
      if((this.cardGridSize[i]["screen"]>cardGridSize || this.cardGridSize[i]["screen"]=="init") && cardGridRow==null){
        cardGridRow=this.cardGridSize[i]["row"]
      }
    }
    if(cardGridRow==1){
      document.getElementById(this.cardGridId).style.display="grid"
    }else{
      document.getElementById(this.cardGridId).style.display="table"
    }
    var cardGridSumsizeGrid=this.cardGridData[0]["sizeBox"]
    cardGridSumsizeGrid=cardGridSumsizeGrid*cardGridRow
    cardGridSumsizeGrid=cardGridSize-(cardGridSumsizeGrid+1)
    this.cardGridMarginHorizontal=cardGridSumsizeGrid/(2*cardGridRow)
  }

  cardGridCalcSizeTitle(){
    this.cardGridSizeTitlePadding=0
    for(var j=0; j<this.cardGridData.length; j++){
      if(document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).offsetHeight>this.cardGridSizeTitlePadding){
        this.cardGridSizeTitlePadding=document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).offsetHeight
      }
    }
    for(var j=0; j<this.cardGridData.length; j++){
      if(document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).offsetHeight!=this.cardGridSizeTitlePadding){
        var cardGridHeightActual=document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).offsetHeight
        cardGridHeightActual=this.cardGridSizeTitlePadding-cardGridHeightActual
        cardGridHeightActual=cardGridHeightActual/2
        document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).style.paddingTop=cardGridHeightActual+"px"
        document.getElementById('card-grid-title-'+this.cardGridId+'-'+j).style.paddingBottom=cardGridHeightActual+"px"
      }
    }
  }

  cardGridCalcSizeDescription(){
    this.cardGridSizeTitlePadding=0
    for(var j=0; j<this.cardGridData.length; j++){
      if(document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).offsetHeight>this.cardGridSizeTitlePadding){
        this.cardGridSizeTitlePadding=document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).offsetHeight
      }
    }
    var carGridHeightFinal=document.getElementById(this.cardGridId+'-0').offsetHeight
    for(var j=0; j<this.cardGridData.length; j++){
      document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).style.paddingTop="10px"
      if(document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).offsetHeight!=this.cardGridSizeTitlePadding){
        var cardGridHeightActual=document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).offsetHeight
        cardGridHeightActual=this.cardGridSizeTitlePadding-cardGridHeightActual
        cardGridHeightActual=cardGridHeightActual/2
        document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).style.paddingTop=cardGridHeightActual+"px"
        document.getElementById('card-grid-description-'+this.cardGridId+'-'+j).style.paddingBottom=cardGridHeightActual+10+"px"
      }
    }
  }

  optionCardGrid(option){
    this.optionSelectCardGrid.emit(option);
  }

}
