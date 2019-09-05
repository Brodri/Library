import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DatepickerModule } from '../public_api';
declare var $: any;

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DatepickerComponent implements OnInit {

  @Input() datepickerTitle="Prueba"
  @Input() datepickerSubtitle="Esto es una prueba"
  @Input() datepickerId="1"
  @Input() datepickerColor="red"
  @Input() datepickerType="range"
  @Input() datepickerMonths=[1,2]
  @Input() DatepickerInput1=""
  @Input() DatepickerInput2=""
  @Input() datepickerCloseClickTo=true
  @Input() datePickerDeleteTo=true

  calendarHeight1="30px"
  calendarOpacity1="0"
  calendarTransition="0s"
  calendarHeight="0px"
  calendarMarginTop="0px"
  calendarVisibility="collapse"
  calendarMovil=false
  calendarYear
  calendarvalidateNumber
  calendarMaxWidth="0px"
  constructor(private datepickerElementRef: ElementRef) { }

  ngOnInit() {
    this.startCalendar()
  }

  datepickerChange1(datepicker){
    console.log(datepicker)
  }

  startCalendar(){
    var datepickerMonths=this.datepickerMonths;
    var calendarSelected
    var calendarColor=this.datepickerColor
    var getId=this.datepickerId
    var datepickerCloseClickTo=this.datepickerCloseClickTo
    var solution=0
    var datepickerType=this.datepickerType
    var calendarRange=[]
    var dateInit
    var datePickerDeleteTo=this.datePickerDeleteTo

    if(this.datepickerMonths.length==1){
      this.calendarMaxWidth="242px"
    }
    if(this.datepickerMonths.length==2){
      this.calendarMaxWidth="484px"
    }
    
    function generateCalendar(d, newGetId, calendar) {
      var days = howManyDays(d);
      var shift = getDayFirstDate(d);
      clear(newGetId, calendar);

      for(var i=0; i<days;i++) {
        var newDay = validateNumber(i+1)
        var newMonth = validateNumber(d.getMonth()+1)
        var posi_row = Math.floor((i+shift)/7);
        var posi_col = Math.floor((i+shift)%7);
        $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
        $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-hover");
        $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
      }
      selectDate(calendarSelected, newGetId)
    }

    function clear(newGetId, calendar){
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-hover");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').attr("id", "");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').each(function(){
        $(this).html('');
      })
    }

    function getDayFirstDate(d) {
      var tempd = new Date();
      tempd.setFullYear(d.getFullYear());
      tempd.setMonth(d.getMonth());
      tempd.setDate(1);
      tempd.setHours(0);
      tempd.setMinutes(0);
      tempd.setSeconds(0);
      return tempd.getDay();
    }

    function howManyDays(d) {
      var m = d.getMonth()+1 ;
      if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
      if(m==2) {
        if(isLeapYear(d.getFullYear())){
          return 29
        }else{
          return 28
        }
      }
      return 30;
    }

    function isLeapYear(year){
      if(year%400==0) {
        return true;
      }else if(year%100==0){
        return false;
      }else if(year%4==0){
        return true;
      }else{
        return false;
      }
    }

    function updateDate(d, sign) {
      var m = d.getMonth();
      if(sign){
        if(m+1>11) {
          d.setFullYear(d.getFullYear()+1);
          d.setMonth(0);
        } else {
          d.setMonth(m+1);
        }
      }else{
        if(m-1<0) {
          d.setFullYear(d.getFullYear()-1);
          d.setMonth(11);
        }else{
          d.setMonth(m-1);
        }
      }
    }

    function month(month){
      switch (month) {
        case 0:
          month = "JANUARY";
          break;
        case 1:
          month = "FEBRUARY";
          break;
        case 2:
          month = "MARCH";
          break;
        case 3:
          month = "APRIL";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JULY";
          break;
        case 7:
          month = "AUGUST";
          break;
        case 8:
          month = "SEPTEMBER";
          break;
        case 9:
          month = "OCTOBER";
          break;
        case 10:
          month = "NOVEMBER";
          break;
        case 11:
          month = "DECEMBER";
      }
      return month;
    }

    function validateNumber(month){
      if(month<10){
        month="0"+month
      }
      return month
    }

    function selectDate(id, newGetId){
      if(newGetId!=null && id!=null){
        for (var i = 0; i < datepickerMonths.length; i++) {
          $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').css("color", "");
          $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').removeClass("calendar-day-selected");
          $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id).addClass("calendar-day-selected");
          $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id).css("color", calendarColor);
        }
      }
      if(id!=null){
        if(datepickerType=="simple"){
          $('#'+newGetId+"-type-from").val(replaceDate(id));
        }
        // range
        if(datepickerType=="range"){
          if(calendarRange[newGetId+"-to"]!=null){
            $('#'+newGetId+"-type-to").val(replaceDate(calendarRange[newGetId+"-to"]));
            $('#'+newGetId+"-type-to").attr("name", calendarRange[newGetId+"-to"])
          }
          if(calendarRange[newGetId+"-from"]!=null){
            if(datePickerDeleteTo){
              if(calendarRange[newGetId+"-from"]!=dateInit){
                dateInit=calendarRange[newGetId+"-from"]
                $('#'+newGetId+"-type-from").val(replaceDate("00-00-0000"));
                $('#'+newGetId+"-type-from").attr("name", "00-00-0000")
                $('#'+newGetId+"-type-from").val(null);
                $('#'+newGetId+"-type-from").attr("name", null)
                $('#'+newGetId+"-type-to").val(replaceDate("00-00-0000"));
                $('#'+newGetId+"-type-to").attr("name", "00-00-0000")
                $('#'+newGetId+"-type-to").val(null);
                $('#'+newGetId+"-type-to").attr("name", null)
                calendarRange[getId+"-to"] = "";
              }
            }
            $('#'+newGetId+"-type-from").val(replaceDate(calendarRange[newGetId+"-from"]));
            $('#'+newGetId+"-type-from").attr("name", calendarRange[newGetId+"-from"])
          }
        }
        // close range
      }
    }

    $(function(){
      for (var i = 0; i < datepickerMonths.length; i++) {
        $('#calendar-display-'+getId+'-'+datepickerMonths[i]).click(function(e){
          calendarSelected=e.target.id
          if(calendarSelected!="" && (calendarSelected.indexOf("calendar")<0)){
            //range
            if(datepickerType=="range"){
              if($(e.target).attr('class').indexOf("from")>-1){
                calendarRange[getId+"-from"] = calendarSelected;
              }
              if($(e.target).attr('class').indexOf("to")>-1){
                calendarRange[getId+"-to"] = calendarSelected;              
              }
            }
            // close range
            selectDate(calendarSelected, getId)
            $('#'+getId+"-title").click();
            //range
            if(datepickerType=="range"){
              if($(e.target).attr('class').indexOf("to")>-1){    
                $('#'+getId+"-title").click();
                if(!datepickerCloseClickTo){
                  $("#"+getId+"-type-to").focus()       
                }
              }
              if($(e.target).attr('class').indexOf("from")>-1){
                $("#"+getId+"-type-to").focus()
              }
            }
            // close range
          }
        });
      }

      var d = new Date();

      for (var i = 0; i < datepickerMonths.length; i++) {
        $('#datepicker-month-number-'+getId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
        $('#datepicker-month-name-'+getId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
        $('#datepicker-year-number-'+getId+'-'+datepickerMonths[i]).html(d.getFullYear());
        generateCalendar(d, getId, datepickerMonths[i]);
      }

      $('#left-'+getId).click(function() {
        if(solution==0 && datepickerMonths.length==2){
          d.setMonth(d.getMonth() - 1);
          solution=1;
        }
        for (var i = (datepickerMonths.length-1); i >= 0; i--) {
          d.setMonth(d.getMonth() + i);
          updateDate(d, 0);
          $('#datepicker-month-number-'+getId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
          $('#datepicker-month-name-'+getId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
          $('#datepicker-year-number-'+getId+'-'+datepickerMonths[i]).html(d.getFullYear());
          generateCalendar(d, getId, datepickerMonths[i]);
        }
        return false;
      });

      $('#right-'+getId).click(function() {
        if(solution==1 && datepickerMonths.length==2){
          d.setMonth(d.getMonth() + 1);
          solution=0;
        }
        for (var i = 0; i < datepickerMonths.length; i++) {
          d.setMonth(d.getMonth() + i - 1);
          updateDate(d, 1);
          if(datepickerMonths.length==1){
            d.setMonth(d.getMonth());
            updateDate(d, 1);
          }
          $('#datepicker-month-number-'+getId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
          $('#datepicker-month-name-'+getId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
          $('#datepicker-year-number-'+getId+'-'+datepickerMonths[i]).html(d.getFullYear());
          generateCalendar(d, getId, datepickerMonths[i]);
        }
        return false;
      });

    });

    function replaceDate(replaceDates){
      replaceDates=replaceDates.replace("-","/")
      replaceDates=replaceDates.replace("-","/")
      return replaceDates
    }
  }

  onClick(event) {
    if (!this.datepickerElementRef.nativeElement.lastElementChild.contains(event.target)){
      this.closeCalendar()
    }
  }

  showCalendarFrom(datepickerId, fromOrTo){
    this.calendarHeight1="auto"
    this.calendarOpacity1="1"
    this.calendarTransition="0.5s ease-in-out"
    this.calendarVisibility="visible"
    this.calendarHeight="210px"
    this.calendarMarginTop="70px"
    this.calendarMovil=true
    if(this.datepickerType=="range"){
      this.changeClassTd(datepickerId, fromOrTo)
    }
  }

  showCalendarTo(datepickerId, fromOrTo){
    this.showCalendarFrom(datepickerId, fromOrTo)
  }
  
  closeCalendar(){
    this.calendarHeight1="30px"
    this.calendarOpacity1="0"
    this.calendarTransition="0s"
    this.calendarVisibility="collapse"
    this.calendarHeight="0px"
    this.calendarMarginTop="0px"
    this.calendarMovil=false
  }

  changeClassTd(datepickerId, fromOrTo){
    for (var i = 0; i < this.datepickerMonths.length; i++) {
      $('#calendar-display-'+datepickerId+'-'+this.datepickerMonths[i]+' tbody td').removeClass("from");
      $('#calendar-display-'+datepickerId+'-'+this.datepickerMonths[i]+' tbody td').removeClass("to");
      $('#calendar-display-'+datepickerId+'-'+this.datepickerMonths[i]+' tbody td').addClass(fromOrTo);
    }
    if(fromOrTo=="from"){
      this.changeDefectRangeFrom(datepickerId)
    }

    if(fromOrTo=="to"){
      this.changeDefectRangeTo(datepickerId)
    }
  }

  changeDefectRangeFrom(datepickerId){
    var dateTo
    if($('#'+datepickerId+"-type-to").attr("name")!=null){
      dateTo=$('#'+datepickerId+"-type-to").attr("name")
    }
    var solution=0

    if($('#'+datepickerId+"-type-to").attr("name")!=null){
      var dayNew=$('#'+datepickerId+"-type-to").attr("name").substring(0, 2);
      var monthNew=$('#'+datepickerId+"-type-to").attr("name").substring(3, 5);
      var yearNew=$('#'+datepickerId+"-type-to").attr("name").substring(6, 10);
      var d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
    }else{
      var d=new Date()
    }
    if($('#'+datepickerId+"-type-from").attr("name")!=null){
      var dayNew=$('#'+datepickerId+"-type-from").attr("name").substring(0, 2);
      var monthNew=$('#'+datepickerId+"-type-from").attr("name").substring(3, 5);
      var yearNew=$('#'+datepickerId+"-type-from").attr("name").substring(6, 10);
      var d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
    }
    var id2=$('#'+datepickerId+"-type-from").attr("name")
    var datepickerMonths=this.datepickerMonths
    var calendarColor=this.datepickerColor
    var monthInit=false
    for (var i = 0; i < datepickerMonths.length; i++) {
      d.setMonth(d.getMonth() + i);
      if(d.getMonth()==0){
        monthInit=true
      }
      if(datepickerMonths[i]==2 && d.getMonth()==2 && monthInit){
        d.setMonth(d.getMonth() -1);
      }
      $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
      $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
      $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
      generateCalendar(d, datepickerId, datepickerMonths[i]);
    }
    
    $('#left-'+datepickerId).click(function() {
      if(solution==0 && datepickerMonths.length==2){
        d.setMonth(d.getMonth() - 1);
        solution=1;
      }
      for (var i = (datepickerMonths.length-1); i >= 0; i--) {
        d.setMonth(d.getMonth() + i);
        updateDate(d, 0);
        $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
        $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
        $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
        generateCalendar(d, datepickerId, datepickerMonths[i]);
      }
      return false;
    });

    $('#right-'+datepickerId).click(function() {
      if(solution==1 && datepickerMonths.length==2){
        d.setMonth(d.getMonth() + 1);
        solution=0;
      }
      for (var i = 0; i < datepickerMonths.length; i++) {
        d.setMonth(d.getMonth() + i - 1);
        updateDate(d, 1);
        if(datepickerMonths.length==1){
          d.setMonth(d.getMonth());
          updateDate(d, 1);
        }
        $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
        $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
        $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
        generateCalendar(d, datepickerId, datepickerMonths[i]);
      }
      return false;
    });

    function generateCalendar(d, newGetId, calendar) {
      var days = howManyDays(d);
      var shift = getDayFirstDate(d);
      clear(newGetId, calendar);
      if($('#'+newGetId+"-type-to").attr("name")!=null){
        var dayNew=$('#'+newGetId+"-type-to").attr("name").substring(0, 2);
        var monthNew=$('#'+newGetId+"-type-to").attr("name").substring(3, 5);
        var yearNew=$('#'+newGetId+"-type-to").attr("name").substring(6, 10);
        var dateFinalTo=new Date(monthNew+"/"+dayNew+"/"+yearNew)
      }
      if($('#'+newGetId+"-type-from").attr("name")!=null){
        var dayNew=$('#'+newGetId+"-type-from").attr("name").substring(0, 2);
        var monthNew=$('#'+newGetId+"-type-from").attr("name").substring(3, 5);
        var yearNew=$('#'+newGetId+"-type-from").attr("name").substring(6, 10);
        var dateFinalFrom=new Date(monthNew+"/"+dayNew+"/"+yearNew)
      }
      for(var i=0; i<days;i++) {
        var newDay = validateNumber(i+1)
        var newMonth = validateNumber(d.getMonth()+1)
        var posi_row = Math.floor((i+shift)/7);
        var posi_col = Math.floor((i+shift)%7);
        var dateActual=new Date(newMonth+'/'+newDay+'/'+d.getFullYear())
        if(dateFinalTo!=null){
          let resta1 = dateActual.getTime() - dateFinalTo.getTime()
          var calcular1=resta1/ (1000*60*60*24)
          if(dateFinalFrom!=null){
            let resta2 = dateActual.getTime() - dateFinalFrom.getTime()
            var calcular2=resta2/ (1000*60*60*24)
            let resta3 = dateActual.getTime() - dateFinalTo.getTime()
            var calcular3=resta3/ (1000*60*60*24)
          }
          if(calcular2>0 && calcular3<0){
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-selected");
          }
          if(calcular1>0){
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-disable");
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
          }else{
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-hover");
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
          }
        }else{
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-hover");
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
        }
      }
      selectDate(newGetId)
    }

    function clear(newGetId, calendar){
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-disable");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-hover");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-selected");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').attr("id", "");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').each(function(){
        $(this).html('');
      })
    }

    function getDayFirstDate(d) {
      var tempd = new Date();
      tempd.setFullYear(d.getFullYear());
      tempd.setMonth(d.getMonth());
      tempd.setDate(1);
      tempd.setHours(0);
      tempd.setMinutes(0);
      tempd.setSeconds(0);
      return tempd.getDay();
    }

    function howManyDays(d) {
      var m = d.getMonth()+1 ;
      if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
      if(m==2) {
        if(isLeapYear(d.getFullYear())){
          return 29
        }else{
          return 28
        }
      }
      return 30;
    }

    function isLeapYear(year){
      if(year%400==0) {
        return true;
      }else if(year%100==0){
        return false;
      }else if(year%4==0){
        return true;
      }else{
        return false;
      }
    }

    function updateDate(d, sign) {
      var m = d.getMonth();
      if(sign){
        if(m+1>11) {
          d.setFullYear(d.getFullYear()+1);
          d.setMonth(0);
        } else {
          d.setMonth(m+1);
        }
      }else{
        if(m-1<0) {
          d.setFullYear(d.getFullYear()-1);
          d.setMonth(11);
        }else{
          d.setMonth(m-1);
        }
      }
    }

    function month(month){
      switch (month) {
        case 0:
          month = "JANUARY";
          break;
        case 1:
          month = "FEBRUARY";
          break;
        case 2:
          month = "MARCH";
          break;
        case 3:
          month = "APRIL";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JULY";
          break;
        case 7:
          month = "AUGUST";
          break;
        case 8:
          month = "SEPTEMBER";
          break;
        case 9:
          month = "OCTOBER";
          break;
        case 10:
          month = "NOVEMBER";
          break;
        case 11:
          month = "DECEMBER";
      }
      return month;
    }

    function validateNumber(month){
      if(month<10){
        month="0"+month
      }
      return month
    }

    function selectDate(newGetId){
      for (var i = 0; i < datepickerMonths.length; i++) {
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').css("color", "");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').css("background", "");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').removeClass("calendar-day-selected");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).addClass("calendar-day-selected");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).css("background", calendarColor);
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).css("color", "#ffffff");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+dateTo).css("background", calendarColor);
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+dateTo).css("color", "#ffffff");
      }
    }

  }


  changeDefectRangeTo(datepickerId){
    var dateFrom
    if($('#'+datepickerId+"-type-from").attr("name")!=null){
      dateFrom=$('#'+datepickerId+"-type-from").attr("name")
    }
    var solution=0
    if($('#'+datepickerId+"-type-from").attr("name")!=null){
      var dayNew=$('#'+datepickerId+"-type-from").attr("name").substring(0, 2);
      var monthNew=$('#'+datepickerId+"-type-from").attr("name").substring(3, 5);
      var yearNew=$('#'+datepickerId+"-type-from").attr("name").substring(6, 10);
      var d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
    }else{
      var d=new Date()
    }
    if($('#'+datepickerId+"-type-to").attr("name")!=null){
      var dayNew=$('#'+datepickerId+"-type-to").attr("name").substring(0, 2);
      var monthNew=$('#'+datepickerId+"-type-to").attr("name").substring(3, 5);
      var yearNew=$('#'+datepickerId+"-type-to").attr("name").substring(6, 10);
      //corregir que al ser un mes no se corra este cambio de mes
      if(monthNew>1){
        monthNew=monthNew-1
      }
      var d=new Date(monthNew+"/"+dayNew+"/"+yearNew)
    }
    var id2=$('#'+datepickerId+"-type-to").attr("name")
    var datepickerMonths=this.datepickerMonths
    var calendarColor=this.datepickerColor
    var monthInit=false
    for (var i = 0; i < datepickerMonths.length; i++) {
      d.setMonth(d.getMonth() + i);
      if(d.getMonth()==0){
        monthInit=true
      }
      if(datepickerMonths[i]==2 && d.getMonth()==2 && monthInit){
        d.setMonth(d.getMonth() -1);
      }
      $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
      $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
      $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
      generateCalendar(d, datepickerId, datepickerMonths[i]);
    }

    $('#left-'+datepickerId).click(function() {
      if(solution==0 && datepickerMonths.length==2){
        d.setMonth(d.getMonth() - 1);
        solution=1;
      }
      for (var i = (datepickerMonths.length-1); i >= 0; i--) {
        d.setMonth(d.getMonth() + i);
        updateDate(d, 0);
        $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
        $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
        $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
        generateCalendar(d, datepickerId, datepickerMonths[i]);
      }
      return false;
    });

    $('#right-'+datepickerId).click(function() {
      if(solution==1 && datepickerMonths.length==2){
        d.setMonth(d.getMonth() + 1);
        solution=0;
      }
      for (var i = 0; i < datepickerMonths.length; i++) {
        d.setMonth(d.getMonth() + i - 1);
        updateDate(d, 1);
        if(datepickerMonths.length==1){
          d.setMonth(d.getMonth());
          updateDate(d, 1);
        }
        $('#datepicker-month-number-'+datepickerId+'-'+datepickerMonths[i]).html(validateNumber(d.getMonth()+1));
        $('#datepicker-month-name-'+datepickerId+'-'+datepickerMonths[i]).html(month(d.getMonth()));
        $('#datepicker-year-number-'+datepickerId+'-'+datepickerMonths[i]).html(d.getFullYear());
        generateCalendar(d, datepickerId, datepickerMonths[i]);
      }
      return false;
    });

    function generateCalendar(d, newGetId, calendar) {
      var days = howManyDays(d);
      var shift = getDayFirstDate(d);
      clear(newGetId, calendar);
      if($('#'+datepickerId+"-type-from").attr("name")!=null){
        var dayNew=$('#'+datepickerId+"-type-from").attr("name").substring(0, 2);
        var monthNew=$('#'+datepickerId+"-type-from").attr("name").substring(3, 5);
        var yearNew=$('#'+datepickerId+"-type-from").attr("name").substring(6, 10);
        var dateFinalFrom=new Date(monthNew+"/"+dayNew+"/"+yearNew)
      }
      
      if($('#'+datepickerId+"-type-to").attr("name")!=null){
        var dayNew=$('#'+datepickerId+"-type-to").attr("name").substring(0, 2);
        var monthNew=$('#'+datepickerId+"-type-to").attr("name").substring(3, 5);
        var yearNew=$('#'+datepickerId+"-type-to").attr("name").substring(6, 10);
        var dateFinalTo=new Date(monthNew+"/"+dayNew+"/"+yearNew)
      }

      for(var i=0; i<days;i++) {
        var newDay = validateNumber(i+1)
        var newMonth = validateNumber(d.getMonth()+1)
        var posi_row = Math.floor((i+shift)/7);
        var posi_col = Math.floor((i+shift)%7);
        var dateActual=new Date(newMonth+'/'+newDay+'/'+d.getFullYear())
        if(dateFinalFrom!=null){
          let resta = dateActual.getTime() - dateFinalFrom.getTime()
          var calcular=resta/ (1000*60*60*24)
          if(dateFinalTo!=null){
            let resta2 = dateActual.getTime() - dateFinalFrom.getTime()
            var calcular2=resta2/ (1000*60*60*24)
            let resta3 = dateActual.getTime() - dateFinalTo.getTime()
            var calcular3=resta3/ (1000*60*60*24)
          }
          if(calcular2>0 && calcular3<0){
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-selected");
          }
          if(calcular<0){
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-disable");
          }else{
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-hover");
            $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
          }
        }else{
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).html(i+1);
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).addClass("calendar-number-day-hover");
          $('#calendar-display-'+newGetId+'-'+calendar+' .r'+posi_row).children('.col'+posi_col).attr('id', ((newDay)+'-'+(newMonth)+'-'+d.getFullYear()));
        }
      }
      selectDate(newGetId)
    }

    function clear(newGetId, calendar){
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-disable");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-hover");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').removeClass("calendar-number-day-selected");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').attr("id", "");
      $('#calendar-display-'+newGetId+'-'+calendar+' tbody td').each(function(){
        $(this).html('');
      })
    }

    function getDayFirstDate(d) {
      var tempd = new Date();
      tempd.setFullYear(d.getFullYear());
      tempd.setMonth(d.getMonth());
      tempd.setDate(1);
      tempd.setHours(0);
      tempd.setMinutes(0);
      tempd.setSeconds(0);
      return tempd.getDay();
    }

    function howManyDays(d) {
      var m = d.getMonth()+1 ;
      if(m==1||m==3||m==5||m==7||m==8||m==10||m==12) return 31;
      if(m==2) {
        if(isLeapYear(d.getFullYear())){
          return 29
        }else{
          return 28
        }
      }
      return 30;
    }

    function isLeapYear(year){
      if(year%400==0) {
        return true;
      }else if(year%100==0){
        return false;
      }else if(year%4==0){
        return true;
      }else{
        return false;
      }
    }

    function updateDate(d, sign) {
      var m = d.getMonth();
      if(sign){
        if(m+1>11) {
          d.setFullYear(d.getFullYear()+1);
          d.setMonth(0);
        } else {
          d.setMonth(m+1);
        }
      }else{
        if(m-1<0) {
          d.setFullYear(d.getFullYear()-1);
          d.setMonth(11);
        }else{
          d.setMonth(m-1);
        }
      }
    }

    function month(month){
      switch (month) {
        case 0:
          month = "JANUARY";
          break;
        case 1:
          month = "FEBRUARY";
          break;
        case 2:
          month = "MARCH";
          break;
        case 3:
          month = "APRIL";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JULY";
          break;
        case 7:
          month = "AUGUST";
          break;
        case 8:
          month = "SEPTEMBER";
          break;
        case 9:
          month = "OCTOBER";
          break;
        case 10:
          month = "NOVEMBER";
          break;
        case 11:
          month = "DECEMBER";
      }
      return month;
    }

    function validateNumber(month){
      if(month<10){
        month="0"+month
      }
      return month
    }

    function selectDate(newGetId){
      for (var i = 0; i < datepickerMonths.length; i++) {
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').css("color", "");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').css("background", "");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('td').removeClass("calendar-day-selected");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).addClass("calendar-day-selected");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).css("background", calendarColor);
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+id2).css("color", "#ffffff");
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+dateFrom).css("background", calendarColor);
        $('#calendar-display-'+newGetId+'-'+datepickerMonths[i]).find('#'+dateFrom).css("color", "#ffffff");
      }
    }

  }
  
}