import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class InputFileComponent implements OnInit {

  @Input() inputFileId
  @Input() inputFileFormat
  @Input() inputFileColor
  @Input() inputFileTitle
  @Input() inputFileContentButton
  @Input() inputFileButtonActive
  @Input() inputFileDisabled
  @Input() inputFileDataSize
  @Input() inputFileDataDimensions
  inputFileAcceptHtml
  inputFileAcceptTs
  
  none
  iconColor
  //borderColor
  nameFile
  
  constructor() { }
  
  ngOnInit() {
    if(this.inputFileFormat=="image"){
      this.inputFileAcceptHtml="image/*"
      this.inputFileAcceptTs=/image-*/
    }
    if(this.inputFileFormat=="pdf"){
      this.inputFileAcceptHtml="pdf/*"
      this.inputFileAcceptTs=/pdf-*/
    }
  }

  imageData;
  //baseColor: string = '#E6E6E6';
  overlayColor: string = 'rgba(255,255,255,0)';
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc:String= ""
  inputFileData:String= ""
  
  handleDragEnter() {
    this.dragging = true;
  }
  
  handleDragLeave() {
    this.dragging = false;
  }
  
  handleDrop(e, $event) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e, $event);
  }
  
  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }
//Genera nombre y based64 
  handleInputChange(e,fileInput) {
    this.inputSimpleCorrect(this.inputFileId)
    this.imageData=e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = this.inputFileAcceptTs;
    var reader = new FileReader();
    this.nameFile = fileInput.imageData.name;

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.inputFileData = reader.result;
    if(this.inputFileFormat=="pdf"){
      this.imageSrc = "https://www.codot.gov/business/civilrights/ada/assets/adobe-pdf-icon.png/image_preview";
    }
    this.inputFileData = this.inputFileData +","+this.nameFile
    this.loaded = true;
  }
  /*
  _setActive() {
    this.borderColor = this.inputFileColor;
    if (this.imageSrc.length === 0) {
        this.iconColor = this.inputFileColor;
    }
  }
  
  _setInactive() {
    this.borderColor = this.baseColor;
    if (this.imageSrc.length === 0) {
        this.iconColor = this.baseColor;
    }
  }
  */
  // error and correct
  inputSimpleError(inputFileId){
    $('#'+inputFileId).addClass('input-simple-error');
    $('#'+inputFileId+'-label').addClass('input-simple-error-label');
    $('#'+inputFileId+'-image').addClass('input-simple-error-image');
    $('#'+inputFileId+'-error').css('visibility','visible');
  }

  inputSimpleCorrect(inputFileId){
    $('#'+inputFileId).removeClass('input-simple-error')
    $('#'+inputFileId+'-label').removeClass('input-simple-error-label');
    $('#'+inputFileId+'-image').removeClass('input-simple-error-image');
    $('#'+inputFileId+'-error').css('visibility','hidden');
  }
  // close error and correct

}
