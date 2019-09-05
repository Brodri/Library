import { Component, OnInit, Input, ElementRef, ViewChildren, QueryList, HostListener, Inject, Output, EventEmitter} from '@angular/core';
import { InputSimpleComponent } from '../input-simple/input-simple.component';
import { DOCUMENT } from "@angular/common";
import { TablePrimaryModule } from './table-primary.module';

declare var $: any;

@Component({
  selector: 'table-primary',
  templateUrl: './table-primary.component.html',
  styleUrls: ['./table-primary.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})

export class TablePrimaryComponent implements OnInit {
  @ViewChildren(InputSimpleComponent) InputSimpleComponenttagId:QueryList<InputSimpleComponent>

  @Input() tablePrimaryId
  @Input() tablePrimaryTypeTable
  @Input() tablePrimaryBackground
  @Input() tablePrimaryColor
  @Input() tablePrimaryHead=[]
  @Input() tablePrimaryBody=[]
  @Input() tablePrimaryBodyData=[]

  @Input() tablePrimaryFilters=["Telefono", "Edad", "Pais"]
  @Input() tablePrimaryQuantityShow=0
  @Input() tablePrimaryQuantityScroll
  @Input() tablePrimaryOrderByNumber=[1,4,5]
  @Input() current_page = 1
  @Input() tablePrimaryResultsPages=10
  @Input() tablePrimaryNumPages=[5,10,15,20,25,30,35]
  @Input() tablePrimaryTextAlign=["center","center","center","center","center","center"]
  
  @Input() heightTableShow
  @Input() tablePrimaryFilter=[]
  @Input() heightTableScroll=0
  @Input() tablePrimaryPages=0
  @Input() tablePrimaryActualPage=1
  @Input() tablePrimaryBodyLocal
  @Input() tablePrimaryScrollingMovil=0
  @Input() tablePrimaryScrollingMovilNew=0
  @Input() tablePrimarySelectOptions=false
  @Input() tablePrimaryArrayComponents=[]
  @Output() tablePrimaryTrSelect= new EventEmitter();
  @Output() tablePrimaryTrShow= new EventEmitter();
  @Output() tablePrimaryTrClose= new EventEmitter();

  variableFilter=[]
  indexFilter
  tablePrimaryQuantityScrollNew1
  tablePrimaryQuantityScrollNew2
  heightTableScrollBackBoolean=false
  heightTableScrollBack
  tablePrimaryVisibilityScrolling="hidden"
  tablePrimarySelectOptionsClass="table-primary-body"
  tablePrimaryTrActive=true

  constructor(@Inject(DOCUMENT) private document: any, private headerElementRef: ElementRef) {
    setTimeout(() => {
      this.tablePrimaryVisibilityScrolling="visible"
      this.detectHeightTable()
      if(this.tablePrimaryTypeTable=="pagination"){
        this.tablePrimaryBodyLocal=this.tablePrimaryBody.length
        this.tablePrimaryPages=Math.ceil(this.tablePrimaryBodyLocal / this.tablePrimaryQuantityScroll);
      }
    }, 1000);
   }

  ngOnInit() {
    if(this.tablePrimarySelectOptions){
      this.tablePrimarySelectOptionsClass="table-primary-body table-tr-select"
    }
  }

  // height table
  detectHeightTable(){
    this.heightTableShow=0
    this.tablePrimaryQuantityScrollNew1=this.tablePrimaryQuantityScroll
    this.tablePrimaryQuantityScrollNew2=this.tablePrimaryQuantityScroll
    for(var i=0; i<this.tablePrimaryQuantityShow; i++){
      document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
      var offsetHeight = document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).offsetHeight;
      this.heightTableShow=this.heightTableShow+offsetHeight
    }

    for(var i=this.tablePrimaryQuantityShow; i<this.tablePrimaryQuantityScroll; i++){
      document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
      var offsetHeight = document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).offsetHeight;
      this.heightTableScroll=this.heightTableScroll+offsetHeight
    }
    this.changeHeadTable()
    if(this.tablePrimaryTypeTable!="scrolling"){
      this.heightTableShow="auto"
      var offsetHeight=document.getElementById('table-'+this.tablePrimaryId).offsetTop
      this.heightTableScroll=this.heightTableScroll+offsetHeight
    }
  }
  // close height table

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var offsetTop=document.getElementById('table-'+this.tablePrimaryId).offsetTop
    var offsetHeight=document.getElementById('table-primary-responsive-'+this.tablePrimaryId).offsetHeight
    var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
    if(this.document.scrollingElement.scrollTop>offsetTop && this.document.scrollingElement.scrollTop<=(offsetHeight+offsetTop-clientHeight)){
      var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
      document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.height=clientHeight+"px"
      var clientWidth = document.getElementById('table-head-'+this.tablePrimaryId).clientWidth;
      document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.width=clientWidth+"px"
      for(var k=0; k<this.tablePrimaryHead.length; k++){
        var clientWidth = document.getElementById('table-head-previous-'+this.tablePrimaryId+'-'+k).clientWidth;
        document.getElementById('table-head-previous-fixed-'+this.tablePrimaryId+'-'+k).style.width = (clientWidth-20)+"px";
      }
      
      var overflowSize=document.getElementById('table-primary-responsive-'+this.tablePrimaryId)
      var tableSize=document.getElementById('table-'+this.tablePrimaryId)
      if(tableSize.offsetWidth<=overflowSize.offsetWidth){
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.top="110px"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.position="fixed"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop="0px"
      }else{
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.position="absolute"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.top="auto"
        var topTable=document.getElementById('table-'+this.tablePrimaryId).offsetTop
        var topWindow=this.document.scrollingElement.scrollTop
        document.getElementById('table-'+this.tablePrimaryId).style.position="relative"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(topWindow-topTable-clientHeight-2)+"px"
        if(this.tablePrimaryScrollingMovil==1){
          document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(topWindow-topTable-clientHeight+this.tablePrimaryScrollingMovilNew-2)+"px"
        }
      }
      document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.display="block"
    }else{
      if(this.tablePrimaryScrollingMovil==1){
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(this.tablePrimaryScrollingMovilNew-clientHeight-1)+"px"
      }
        if(this.tablePrimaryScrollingMovil==0){
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.position="relative"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.top="0px"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.display="none"
      }
    }
    if(this.tablePrimaryTypeTable=="scroll infinite"){
      var loadData=0

      if((this.document.scrollingElement.scrollTop+100)>this.heightTableScroll){
        for(var i=0; i<this.tablePrimaryQuantityScrollNew1; i++){
          if(!document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
            loadData=1
          }
        }
        if(loadData==0){
          this.loadMoreDataTable()
        }
      }
    }
  }


  // change head table
  changeHeadTable(){
    var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
    document.getElementById('table-'+this.tablePrimaryId).style.visibility="hidden"
    if(this.tablePrimaryTypeTable=="scrolling"){
      for(var k=0; k<this.tablePrimaryHead.length; k++){
        var clientWidth = document.getElementById('table-head-previous-'+this.tablePrimaryId+'-'+k).clientWidth;
        document.getElementById('table-head-new-'+this.tablePrimaryId+'-'+k).style.width = (clientWidth-20)+"px";
      }
      setTimeout(() => {
        var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
        document.getElementById('table-new-'+this.tablePrimaryId).style.width=document.getElementById('table-head-'+this.tablePrimaryId).clientWidth+"px";
        document.getElementById('table-'+this.tablePrimaryId).style.marginTop="-"+(clientHeight+1)+"px"
        document.getElementById('table-'+this.tablePrimaryId).style.visibility="visible"
      }, 10);
    }else{
      document.getElementById('table-'+this.tablePrimaryId).style.visibility="visible"
    }
    
    var tablePrimaryHead=this.tablePrimaryHead
    var tablePrimaryId=this.tablePrimaryId
    var tablePrimaryTypeTable=this.tablePrimaryTypeTable
    $(window).resize(function() {
      var overflowSize=document.getElementById('table-primary-responsive-'+tablePrimaryId)
      var tableSize=document.getElementById('table-'+tablePrimaryId)
      if(tableSize.offsetWidth>overflowSize.offsetWidth){
        document.getElementById('table-head-fixed-'+tablePrimaryId).style.position="absolute"
        document.getElementById('table-head-fixed-'+tablePrimaryId).style.top="auto"
        document.getElementById('table-'+tablePrimaryId).style.position="relative"
      }else{
        document.getElementById('table-head-fixed-'+tablePrimaryId).style.position="fixed"
        document.getElementById('table-head-fixed-'+tablePrimaryId).style.top="110px"
        document.getElementById('table-'+tablePrimaryId).style.position="relative"
      }
      var clientHeight = document.getElementById('table-head-'+tablePrimaryId).clientHeight;
      //document.getElementById('table-'+tablePrimaryId).style.marginTop="-"+(clientHeight+1)+"px"
      if(this.tablePrimaryTypeTable=="scrolling"){
        document.getElementById('table-new-'+tablePrimaryId).style.width=document.getElementById('table-head-'+tablePrimaryId).clientWidth+"px";
      }
        for(var k=0; k<tablePrimaryHead.length; k++){
        var clientWidth = document.getElementById('table-head-previous-'+tablePrimaryId+'-'+k).clientWidth;
        if(tablePrimaryTypeTable=="scrolling"){
          document.getElementById('table-head-new-'+tablePrimaryId+'-'+k).style.width = (clientWidth-20)+"px";
        }
        document.getElementById('table-head-previous-fixed-'+tablePrimaryId+'-'+k).style.width = (clientWidth-20)+"px";
      }
    });
  }
  // close change head table
  
  provisionalShowTable(){
    var heightTable=document.getElementById('table-primary-responsive-'+this.tablePrimaryId).offsetHeight
    if(this.tablePrimaryTypeTable!="scrolling"){
      $('#table-primary-responsive-'+this.tablePrimaryId).css('height', heightTable+'px');
      $('#table-primary-responsive-'+this.tablePrimaryId).css('overflow', 'hidden');
    }
    $('#table-'+this.tablePrimaryId).find('.table-primary-body').css('display', 'table-row');
    setTimeout(() => {
      $('#table-'+this.tablePrimaryId).find('.table-primary-body').attr('id', "");
      var i=0
      var tablePrimaryId=this.tablePrimaryId
      $('#table-'+this.tablePrimaryId).find(".table-primary-body").each(function(){
          $(this).attr('id', 'table-primary-tr-body-'+tablePrimaryId+'-'+(i+1));
          i++
      });
      $('#table-'+this.tablePrimaryId).find('.table-primary-body').css('display', 'none');
      this.visibleTableAgain()
      if(this.tablePrimaryTypeTable!="scrolling"){
        $('#table-primary-responsive-'+this.tablePrimaryId).css('height', 'auto');
        $('#table-primary-responsive-'+this.tablePrimaryId).css('overflow', 'auto');
      }
    }, 10);
  }

  visibleTableAgain(){
    if(this.tablePrimaryTypeTable=="pagination"){
      for(var i=0; i<this.tablePrimaryQuantityScroll; i++){
        if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
          document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
        }
      }
    }else{
      for(var i=0; i<this.tablePrimaryQuantityScrollNew1; i++){
        if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
          document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
        }
      }
    }
    if(this.heightTableScrollBackBoolean){
      this.heightTableScroll=this.heightTableScrollBack
      for(var j=(this.tablePrimaryQuantityScrollNew2-this.tablePrimaryQuantityScroll); j<this.tablePrimaryQuantityScrollNew1; j++){
        if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(j+1))){
          var offsetHeight = document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(j+1)).offsetHeight;
          this.heightTableScroll=this.heightTableScroll+offsetHeight
        }
      }
    }
  }

  // filter
  inputSimpleChange(tag){
    var arrayInputs=this.InputSimpleComponenttagId.toArray()
    setTimeout(() => {
      this.provisionalShowTable()
      if(this.tablePrimaryTypeTable=="scrolling"){
        setTimeout(() => {
          this.changeHeadTable()
        }, 100);
      }
      for(var i=0; i<this.tablePrimaryHead.length; i++){
        if(this.tablePrimaryHead[i]==tag){
          this.indexFilter=i
        }
      }
      for(var j=0; j<arrayInputs.length; j++){
        if(arrayInputs[j]["inputSimpleContent"]==tag && arrayInputs[j]["inputSimpleData"]!=tag){
          this.variableFilter[this.indexFilter]=arrayInputs[j]["inputSimpleData"]
        }
      }
      setTimeout(() => {
        this.tablePrimaryBodyLocal=$('#table-'+this.tablePrimaryId).find('.table-primary-body').length;
        this.tablePrimaryPages=Math.ceil($('#table-'+this.tablePrimaryId).find('.table-primary-body').length / this.tablePrimaryQuantityScroll);
      }, 100);
    }, 100);
  }
  // close filter


  //// scrolling

  loadMoreDataTable(){
    this.heightTableScrollBackBoolean=false
    this.heightTableScrollBack=this.heightTableScroll
    this.tablePrimaryQuantityScrollNew1=this.tablePrimaryQuantityScrollNew1+this.tablePrimaryQuantityScroll
    for(var i=this.tablePrimaryQuantityScrollNew2; i<this.tablePrimaryQuantityScrollNew1; i++){
      if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
        document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
        var offsetHeight = document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).offsetHeight;
        this.heightTableScroll=this.heightTableScroll+offsetHeight
      }else{
        this.heightTableScrollBackBoolean=true
      }
    }
    this.tablePrimaryQuantityScrollNew2=this.tablePrimaryQuantityScrollNew2+this.tablePrimaryQuantityScroll
  }

  scrollingTable(event){
    var loadData=0
    var topTable=document.getElementById('table-'+this.tablePrimaryId).offsetTop
    var topWindow=this.document.scrollingElement.scrollTop
    if(event["target"]["scrollTop"]>0){
      var topFinal=topWindow-topTable
      var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
      var overflowSize=document.getElementById('table-primary-responsive-'+this.tablePrimaryId)
      var tableSize=document.getElementById('table-'+this.tablePrimaryId)
      if(tableSize.offsetWidth>overflowSize.offsetWidth){
        this.tablePrimaryScrollingMovil=1
        var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.height=clientHeight+"px"
        var clientWidth = document.getElementById('table-head-'+this.tablePrimaryId).clientWidth;
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.width=clientWidth+"px"
        for(var k=0; k<this.tablePrimaryHead.length; k++){
          var clientWidth = document.getElementById('table-head-previous-'+this.tablePrimaryId+'-'+k).clientWidth;
          document.getElementById('table-head-previous-fixed-'+this.tablePrimaryId+'-'+k).style.width = (clientWidth-20)+"px";
        }
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.position="absolute"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.top="auto"
        document.getElementById('table-'+this.tablePrimaryId).style.position="relative"
        this.tablePrimaryScrollingMovilNew=event["target"]["scrollTop"]
        if(topTable<=topWindow){
          document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(event["target"]["scrollTop"]-clientHeight-1+topFinal)+"px"
        }else{
          document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(event["target"]["scrollTop"]-clientHeight-1)+"px"
        }
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.display="block"
      }else{
        this.tablePrimaryScrollingMovil=0
      }
    }else{
      this.tablePrimaryScrollingMovil=0
      var topFinal=topTable-topWindow
      var clientHeight = document.getElementById('table-head-'+this.tablePrimaryId).clientHeight;
      var overflowSize=document.getElementById('table-primary-responsive-'+this.tablePrimaryId)
      var tableSize=document.getElementById('table-'+this.tablePrimaryId)
      if(tableSize.offsetWidth>overflowSize.offsetWidth){
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.marginTop=(-clientHeight-topFinal-1)+"px"
      }
      if(topFinal>0){
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.position="relative"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.top="0px"
        document.getElementById('table-head-fixed-'+this.tablePrimaryId).style.display="none"
      }
    }
    if(event["target"]["scrollTop"]>(this.heightTableScroll-100)){
       for(var i=0; i<this.tablePrimaryQuantityScrollNew1; i++){
        if(!document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
          loadData=1
         }
       }
       if(loadData==0){
        this.loadMoreDataTable()
       }
    }
  }

  //// close scrolling


  ////// pagination

  tablePrimaryNextPage(){
    if(this.tablePrimaryActualPage<this.tablePrimaryPages){
      var pages=this.tablePrimaryActualPage*this.tablePrimaryQuantityScroll
      this.tablePrimaryActualPage++
      $('#table-'+this.tablePrimaryId).find('.table-primary-body').css('display', 'none');
      for(var i=pages; i<pages+this.tablePrimaryQuantityScroll; i++){
        if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
          document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
        }
      }
    }

  }

  tablePrimaryPrevPage(){
    if(this.tablePrimaryActualPage>1){
      this.tablePrimaryActualPage--
      $('#table-'+this.tablePrimaryId).find('.table-primary-body').css('display', 'none');
      var pages=(this.tablePrimaryActualPage-1)*this.tablePrimaryQuantityScroll
      for(var i=pages; i<pages+this.tablePrimaryQuantityScroll; i++){
        if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
          document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
        }
      }
    }

  }

  tablaPrimaryShowPagination(){
    this.tablePrimaryNumPages
    if($("#table-primary-pagination-"+this.tablePrimaryId).css('display')=="block"){
      $("#table-primary-pagination-"+this.tablePrimaryId).css('display', 'none')
      $("#table-primary-pagination-click-"+this.tablePrimaryId).css('border', '0px solid '+this.tablePrimaryBackground)
    }else{
      $("#table-primary-pagination-"+this.tablePrimaryId).css('display', 'block')
      var marginTop=document.getElementById("table-primary-pagination-"+this.tablePrimaryId).offsetHeight
      $("#table-primary-pagination-"+this.tablePrimaryId).css('margin-top', '-'+(marginTop-2)+"px")
      $("#table-primary-pagination-click-"+this.tablePrimaryId).css('border', '1px solid '+this.tablePrimaryBackground)
      var tablePrimaryQuantityScroll=this.tablePrimaryQuantityScroll
      var tablePrimaryBackground=this.tablePrimaryBackground
      $(".table-primary-verification-pages-"+this.tablePrimaryId).each(function(){
        if($(this).text()==tablePrimaryQuantityScroll){
          $(this).css('border', '1px solid '+tablePrimaryBackground)
        }else{
          $(this).css('border', '0px solid '+tablePrimaryBackground)
        }
      });
    }
  }

  tablePrimaryChangePagination(page){
    $("#table-primary-pagination-click-"+this.tablePrimaryId).css('border', '0px solid '+this.tablePrimaryBackground)
    this.tablePrimaryQuantityScroll=page
    $("#table-primary-pagination-"+this.tablePrimaryId).css('display', 'none')
    this.tablePrimaryPages=Math.ceil(this.tablePrimaryBodyLocal / this.tablePrimaryQuantityScroll);
    $('#table-'+this.tablePrimaryId).find('.table-primary-body').css('display', 'none');
    for(var i=0; i<this.tablePrimaryQuantityScroll; i++){
      if(document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1))){
        document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).style.display = "table-row"
      }
    }
  }

  ////// close pagination


  ////// order by
  sortTable(n) {
    this.tablePrimaryActualPage=1
    this.provisionalShowTable()
    if(this.tablePrimaryTypeTable=="scrolling"){
      setTimeout(() => {
        this.changeHeadTable()
      }, 100);
    }
    var found = this.tablePrimaryOrderByNumber.find(function(element) {
      return element > (n);
    });

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = $("#table-"+this.tablePrimaryId).find("tbody");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.find("TR");
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if(found==(n+1)){
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }else{
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          }
        } else if (dir == "desc") {
          if(found==(n+1)){
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }else{
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  //// close order by

  /// selected tr table
  tableSelectTr(i, id, event){
    if(this.tablePrimarySelectOptions){
      setTimeout(() => {
        if(this.tablePrimaryTrActive){
          var x = event.clientX
          var y = event.clientY
          this.tablePrimaryTrSelect.emit([this.tablePrimaryBodyData[i],document.getElementById('table-primary-tr-body-'+this.tablePrimaryId+'-'+(i+1)).offsetTop]);
        }else{
          this.tablePrimaryTrActive=true
        }
      }, 20);
    }
  }
  /// close selected tr table

  onClick(event) {
    if(event.target.nodeName=="TD"){
      this.tablePrimaryTrShow.emit(true)
    }else{
      this.tablePrimaryTrShow.emit(false)
    }
  }

  tablePrimarySelectOption(event, i){
    this.tablePrimaryTrClose.emit({event,i})
    setTimeout(() => {
      this.tablePrimaryTrActive=true
    }, 10);
  }

  cancelFunctionTr(){
    this.tablePrimaryTrActive=false
  }

}
