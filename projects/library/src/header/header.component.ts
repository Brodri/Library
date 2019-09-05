import { Component, OnInit, Input, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class HeaderComponent implements OnInit {
  //coment
  @Output() myAccountMenuHeader= new EventEmitter();
  @Output() exitMenuHeader= new EventEmitter();
  @Output() optionMenuHeader= new EventEmitter();
  @Output() principalMenuHeader= new EventEmitter();
  @Output() headerBreadcrumbsRedirect= new EventEmitter();
  @Output() headerCreateHolding= new EventEmitter();
  @Output() headerRedirectFooter= new EventEmitter();
  @Output() headerRedirectHolding= new EventEmitter();
  @Output() headerRedirectAudit= new EventEmitter();
  @Output() headerRedirectPendingTask= new EventEmitter();
  
  @Input() languageHeader;
  @Input() colorHeader;
  @Input() logoHeader;
  @Input() colorSearchHeader;
  @Input() searchHeader: string = ''
  @Input() auditHeader = true
  @Input() pendingTaskHeader = true
  @Input() optionsMenuHeader: any[]
  @Input() headerBreadcrumbs=[{"name":"Home", "redirect":"home"}, {"name":"User", "redirect":"user"},{"name":"Home Number 2", "redirect":"home"}, {"name":"User Number 2", "redirect":"user"},{"name":"Home Number 3", "redirect":"home"}, {"name":"User Number 3", "redirect":"user"}]
  @Input() headerDataUser={name:"pepito perez", email:"p.perez@dominio.com"}
  @Input() headerRequiredSearchHeader = true
  @Input() headerRequiredButtonHelp = true
  @Input() headerMyHoldingSupevision =true
  @Input() headerComponentMyaccount = true
  @Input() headerUserPerfilPhoto = "assets/images/brandon.png"
  @Input() currentYear = 2019
  @Input() headerMyHoldingData = {"id":"1","image":"assets/images/colombia.svg"}
  @Input() headerSupervisionHoldingData = [{"id":"1","image":"assets/images/colombia.png"},{"id":"2","image":"assets/images/argentina.png"},{"id":"3","image":"assets/images/peru.png"},{"id":"4","image":"assets/images/mexico.png"},{"id":"5","image":"assets/images/chile.png"}]
  
  headerGrid=5
  headerTooltipUserVisibility=""
  headerTooltipSquaresVisibility=""
  headerMenuUserOpacity="0"
  headerMenuSquaresOpacity="0"
  headerUserBackground=""
  headerSquaresBackground=""
  headerHelpBackground=""
  headerHoldingBackground=""
  headerHoldingVisibility=""
  headerHoldingBorder=""
  headerMenuUserVisibility="hidden"
  headerMenuSquaresVisibility="hidden"
  headerSearchPlaceholderNew=""
  headerMarginLeftMenu="-275px"
  headerClassMenuLeft="header-menu-left1"
  headerCoverDisplay="none"
  headerCoverOpacity="0.33"
  headerShowClearInput=false
  headerOpacityMenuLeft
  headerChageToucheOpen
  headerChageToucheClose
  headerStyleMarginLeft
  headerImagePrincipalHolding = this.headerMyHoldingData['image']
  

  constructor(private headerElementRef: ElementRef, private headerTranslate: TranslateService) {
  }

  myAccountMenuHeaderFunction(){
    this.myAccountMenuHeader.emit();
  }
  exitMenuHeaderFunction(){
    this.exitMenuHeader.emit();
  }
  principalMenuHeaderFunction(){
    this.principalMenuHeader.emit();
  }

  optionMenuHeaderFunction(title){
    this.optionMenuHeader.emit(title);
    this.headerCloseAll()
  }

  // config language
  switchLanguage(language: string) {
    this.headerTranslate.use(language);
  }
  // close config language


  ngOnChanges(changes: SimpleChanges) {
    if (changes['languageHeader']){
      this.headerTranslate.setDefaultLang(this.languageHeader);
      this.headerTranslate.get('Header.InputSearch').subscribe((res: string) => {
        this.headerSearchPlaceholderNew=res;
      });
    }
  }

  ngOnInit() {
    var headerChageToucheOpen=this.headerChageToucheOpen
    var headerChageToucheClose=this.headerChageToucheClose
    $(window).resize(function() {
      if($( "#header-squares-margen" ).css( "opacity" )=="0")
      if(($( window ).width()+15)>768){
        $( "#clean-input-movil" ).click();
        $( "#clean-input-desktop" ).click();
      }
    });

    //// Slide Menu
    document.ontouchmove = function(event) {
      if(event.touches[0].clientX<40){
        if(!headerChageToucheOpen){
          headerChageToucheOpen=event.touches[0].clientX;
        }
      }
      if(!headerChageToucheOpen){
        if(event.touches[0].clientX>240){
          if(!headerChageToucheClose){
            headerChageToucheClose=event.touches[0].clientX;
          }
        }
      }
    }
    document.ontouchend=function(event) {
      if(headerChageToucheOpen!=""){
        if(headerChageToucheOpen<event.changedTouches[0].clientX){
          headerChageToucheOpen=""
          document.getElementById("header-menu-principal").click()
        }
      }
    }

    if(!this.headerRequiredSearchHeader){
      this.headerStyleMarginLeft = 'calc(100% - 45px)'
    }else{
      this.headerStyleMarginLeft = 'calc(100% - 108px)'
    }
    //// Close Slide Menu

    this.headerTranslate.get('Header.InputSearch').subscribe((res: string) => {
      this.headerSearchPlaceholderNew=res;
    });
    if(this.auditHeader==false){
      this.headerGrid--
    }
    if(this.pendingTaskHeader==false){
      this.headerGrid--
    }
    this.headerGrid=100/this.headerGrid
  }


  // functions search input
  headerFocusSearchPlaceholder(){
    this.headerSearchPlaceholderNew=""
  }

  headerFocusSearchPlaceholderMovil(){
    this.headerSearchPlaceholderNew="For example; Users"
  }


  headerFocusoutSearchPlaceholder(){
    this.headerTranslate.get('Header.InputSearch').subscribe((res: string) => {
      this.headerSearchPlaceholderNew=res;
    });
  }


  headerInputChange(newValue){
    if(newValue==""){
      this.headerShowClearInput=false;
    }else{
      this.headerShowClearInput=true;
    }
  }

  headerInputChangeMovil(newValue){
    if(newValue==""){
      this.headerSearchFocusSelection()
    }else{
      document.getElementById("search-content-filter-movil").innerHTML = "";
    }
  }


  headerClearInput(){
    this.searchHeader="";
    this.headerShowClearInput=false;
  }

  headerClearInputMovil(){
    this.searchHeader="";
  }
  // close functions search input



  // function open windows
  headerMainMenuOpen(){
    var element = document.getElementById("header-hamburguer");
    if(this.headerCoverDisplay=="none"){
      element.className="header-change";
    }else{
      element.className="header-hamburguer";
    }
    if(this.headerCoverDisplay=="none"){
      this.headerCoverDisplay="block"
      this.headerCoverOpacity="0.33"
      this.headerMarginLeftMenu="0px"
      this.headerClassMenuLeft="header-menu-left2"
      this.headerOpacityMenuLeft="#00000030"
      //Open slide menu
      var headerChageToucheOpen=this.headerChageToucheOpen
      var headerChageToucheClose=this.headerChageToucheClose
      document.ontouchend=function(event) {
        headerChageToucheOpen=""
        if(headerChageToucheClose!=""){
          if(headerChageToucheClose>event.changedTouches[0].clientX){
            headerChageToucheClose=""
            document.getElementById("header-menu-principal").click()
          }
        }
      }
      //Close Open slide menu
    }else{
      this.headerCoverOpacity="0"
      setTimeout(() => {
        this.headerCoverDisplay="none"
      }, 200);
      this.headerMarginLeftMenu="-275px"
      this.headerClassMenuLeft="header-menu-left1"
      this.headerOpacityMenuLeft="";
      //Open slide menu
      document.ontouchend=function(event) {
        headerChageToucheClose=""
        if(headerChageToucheOpen!=""){
          if(headerChageToucheOpen<event.changedTouches[0].clientX){
            headerChageToucheOpen=""
            document.getElementById("header-menu-principal").click()
          }
        }
      }
      //Close Open slide menu
    }
  }


  headerUserMenuOpen(){
    this.headerSearchFocusNoSelection()
    if(this.headerMenuUserVisibility=="hidden"){
      this.headerTooltipUserVisibility="hidden"
      this.headerMenuUserVisibility="visible"
      this.headerUserBackground="#00000030"
      this.headerMenuUserOpacity="1"
      document.getElementById("tooltiptext-user-movil").style.marginTop = "51px";
      document.getElementById("tooltiptext-user-movil").style.visibility = "visible";
    }else{
      this.headerTooltipUserVisibility=""
      this.headerMenuUserVisibility="hidden"
      this.headerUserBackground=""
      this.headerMenuUserOpacity="0"
      document.getElementById("tooltiptext-user-movil").style.marginTop = "calc(-100vh + 160px)";
      document.getElementById("tooltiptext-user-movil").style.visibility = "hidden";
    }
    if(!this.headerRequiredSearchHeader){
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 45px)"; 
    }else{
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 108px)"; 
    }
  }

  headerHelpMenuOpen(){
    this.headerSearchFocusNoSelection()
    if(this.headerHelpBackground==""){
      this.headerHelpBackground="#00000030"
      document.getElementById("tooltiptext-help-movil").style.marginTop = "51px";
      document.getElementById("tooltiptext-help-movil").style.visibility = "visible";
      document.getElementById("tooltiptext-help-movil").style.transition = "0s ease-in-out";
    }else{
      this.headerHelpBackground=""
      document.getElementById("tooltiptext-help-movil").style.marginTop = "calc(-100vh + 160px)";
      document.getElementById("tooltiptext-help-movil").style.visibility = "hidden";
      document.getElementById("tooltiptext-help-movil").style.transition = "0s ease-in-out";
    }
    if(!this.headerRequiredSearchHeader){
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 45px)"; 
    }else{
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 108px)"; 
    }
  }

  headerSquaresMenuOpen(){
    this.headerSearchFocusNoSelection()
    if(this.headerMenuSquaresVisibility=="hidden"){
      this.headerTooltipSquaresVisibility="hidden"
      this.headerMenuSquaresVisibility="visible"
      this.headerSquaresBackground="#00000030"
      this.headerMenuSquaresOpacity="1"
      document.getElementById("tooltiptext-squares-movil").style.visibility = "visible";
      document.getElementById("tooltiptext-squares-movil").style.marginTop = "51px";
    }else{
      this.headerTooltipSquaresVisibility=""
      this.headerMenuSquaresVisibility="hidden"
      this.headerSquaresBackground=""
      this.headerMenuSquaresOpacity="0"
      document.getElementById("tooltiptext-squares-movil").style.marginTop = "calc(-100vh + 160px)";
      document.getElementById("tooltiptext-squares-movil").style.visibility = "hidden";
    }
    if(!this.headerRequiredSearchHeader){
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 45px)"; 
    }else{
      document.getElementById("header-squares-margen").style.marginLeft = "calc(100% - 108px)"; 
    }
  }

  headerHoldingMenuOpen(){
    this.headerSearchFocusNoSelection()
    if(this.headerHoldingBackground==""){
      this.headerHoldingBackground="#f3f3f3"
      this.headerHoldingVisibility="visible"
      this.headerHoldingBorder="1px solid #ccc"
      document.getElementById("tooltiptext-holding-movil").style.visibility = "visible";
      document.getElementById("tooltiptext-holding-movil").style.marginTop = "51px";
      document.getElementById("tooltiptext-holding").style.visibility = "visible";
    }else{
      this.headerHoldingBackground=""
      this.headerHoldingVisibility=""
      this.headerHoldingBorder=""
      document.getElementById("tooltiptext-holding-movil").style.marginTop = "calc(-100vh + 155px)";
      document.getElementById("tooltiptext-holding-movil").style.visibility = "hidden";
      document.getElementById("tooltiptext-holding").style.visibility = "hidden";
    }
  }
  // close function open windows



  // function close windows
  onClick(event) {
    if (!this.headerElementRef.nativeElement.contains(event.target)){
      if(this.headerCoverDisplay!="none"){
        this.headerMainMenuOpen()
      }
      if(this.headerMenuUserVisibility=="visible"){
        this.headerUserMenuOpen()
      }
      if(this.headerMenuSquaresVisibility=="visible"){
        this.headerSquaresMenuOpen()
      }
      if(this.headerHelpBackground=="#00000030"){
        this.headerHelpMenuOpen()
      }
      if(this.headerHoldingBackground=="#f3f3f3"){
        this.headerHoldingMenuOpen()
      }
    }
  }

  headerCloseAll() {
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }



  headerMainMenu(){
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }


  headerLogoMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }
  

  headerSearchMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerSearchFocus(){
    document.getElementById("header-txt-search2").focus();
  }

  headerSearchFocusSelection(){
    
    // init search
    document.getElementById("search-content-filter-movil").innerHTML = "";
    var div = document.createElement("div");
    div.setAttribute('id', 'content-search');
    var content = document.createTextNode("For example here you can search: Holdings, Operations, Users, Use case, App, Domain, Roles, Permissions assignment, Permissions supervision, Domain customization, App admin permissions, Global use cases, Moving operation to another Holding page of user.");
    div.appendChild(content);
    document.getElementById("search-content-filter-movil").appendChild(div);
    document.getElementById("content-search").style.width = "80%";
    document.getElementById("content-search").style.marginLeft = "10%";
    document.getElementById("content-search").style.textAlign = "center";
    document.getElementById("content-search").style.color = "#7F7F7F";
    document.getElementById("content-search").style.marginTop = "15vh";
    document.getElementById("content-search").style.fontSize = "19px";
    document.getElementById("search-content-filter-movil").style.transition = "0.5s ease-in-out";
    document.getElementById("search-content-filter-movil").style.visibility = "visible";
    document.getElementById("search-content-filter-movil").style.opacity = "1";
    // close init search

    // config style
    document.getElementById("header-txt-search2").style.width = "calc(100% - 39px)";
    document.getElementById("search-filter-movil").style.visibility = "visible";
    document.getElementById("width-search-submenu2").style.width = "97%";
    document.getElementById("header-menu-left").style.marginLeft = "calc(-20% - 100px)";
    document.getElementById("header-squares-margen").style.marginLeft = "0px";
    document.getElementById("header-pending-task-margen").style.marginLeft = "0px";
    document.getElementById("header-squares-margen").style.opacity = "0";
    document.getElementById("header-pending-task-margen").style.opacity = "0";
    document.getElementById("header-menu-left").style.opacity = "0";
    document.getElementById("header-logo-principal").style.opacity = "0";
    document.getElementById("width-search-submenu2").style.marginRight = "1.5%";
    document.getElementById("clean-input-movil").style.transition = "0s ease-in-out";
    document.getElementById("clean-input-movil").style.visibility = "visible";
    document.getElementById("clean-input-movil").style.opacity = "1";
    // close config style
  }

  headerSearchFocusNoSelection(){
    if (this.headerRequiredSearchHeader) {
      document.getElementById("header-txt-search2").style.width = "calc(94% - 45px);";
      document.getElementById("width-search-submenu2").style.width = "38px";
      document.getElementById("width-search-submenu2").style.marginRight = "10px";
    }
    document.getElementById("search-content-filter-movil").innerHTML = "";
    document.getElementById("search-filter-movil").style.visibility = "hidden";
    document.getElementById("header-menu-left").style.marginLeft = "0%";
    document.getElementById("header-menu-left").style.opacity = "1";
    document.getElementById("header-squares-margen").style.marginLeft = "";
    document.getElementById("header-pending-task-margen").style.marginLeft = "";
    document.getElementById("header-squares-margen").style.opacity = "1";
    document.getElementById("header-pending-task-margen").style.opacity = "1";
    document.getElementById("header-logo-principal").style.opacity = "1";
    document.getElementById("clean-input-movil").style.transition = "0s ease-in-out";
    document.getElementById("clean-input-movil").style.visibility = "hidden";
    document.getElementById("clean-input-movil").style.opacity = "0";
    document.getElementById("search-content-filter-movil").style.transition = "0s ease-in-out";
    document.getElementById("search-content-filter-movil").style.visibility = "hidden";
    document.getElementById("search-content-filter-movil").style.opacity = "0";
  }


  headerQuestionMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerAlarmMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerAuditMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerUserMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerSquaresMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen();
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
    if(this.headerHoldingBackground=="#f3f3f3"){
      this.headerHoldingMenuOpen()
    }
  }

  headerHoldingMenu(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
  }

  headerBreadcrumb(){
    if(this.headerCoverDisplay!="none"){
      this.headerMainMenuOpen()
    }
    if(this.headerMenuUserVisibility=="visible"){
      this.headerUserMenuOpen()
    }
    if(this.headerMenuSquaresVisibility=="visible"){
      this.headerSquaresMenuOpen()
    }
    if(this.headerHelpBackground=="#00000030"){
      this.headerHelpMenuOpen()
    }
  }
  // close function open windows


  // Breadcrumb

  headerBreadCrumbRedirect(url){
    this.headerBreadcrumbsRedirect.emit(url);
  }

  // close Breadcrums

  // new holding
  headerCreateNewHolding(){
    this.headerCreateHolding.emit()
    this.headerCloseAll()
  }
  // close new holding

  headerSelectHolding(data,index,isMyHolding){
    if(isMyHolding){
      this.headerImagePrincipalHolding= data.headerMyHoldingData.image
    }else{
      this.headerImagePrincipalHolding = data.headerSupervisionHoldingData[index].image
    }
  }
  headerExchangeHolding(){
    console.log('entro')
    this.headerRedirectHolding.emit()
    this.headerCloseAll()
  }

  headerRedirectFooterFunction(){
    this.headerRedirectFooter.emit()
    this.headerCloseAll()
  }
  headerRedirectPendingTaskFunction(){
    this.headerRedirectPendingTask.emit()
    this.headerCloseAll()
  }
  headerRedirectAuditFunction(){
    this.headerRedirectAudit.emit()
    this.headerCloseAll()
  }

}