import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: string, value1: string, value2: string, value3: string, value4: string, value5: string, value6: string, value7: string, value8: string, value9: string){
    if (items && items.length){
      return items.filter(item =>{
        if (value && item[0].toLowerCase().indexOf(value.toLowerCase()) === -1){
            return false;
        }
        if (value1 && item[1].toLowerCase().indexOf(value1.toLowerCase()) === -1){
            return false;
        }
        if (value2 && item[2].toLowerCase().indexOf(value2.toLowerCase()) === -1){
          return false;
        }
        if (value3 && item[3].toLowerCase().indexOf(value3.toLowerCase()) === -1){
            return false;
        }
        if (value4 && item[4].toLowerCase().indexOf(value4.toLowerCase()) === -1){
          return false;
        }
        if (value5 && item[5].toLowerCase().indexOf(value5.toLowerCase()) === -1){
          return false;
        }
        if (value6 && item[6].toLowerCase().indexOf(value6.toLowerCase()) === -1){
          return false;
        }
        if (value7 && item[7].toLowerCase().indexOf(value7.toLowerCase()) === -1){
          return false;
        }
        if (value8 && item[8].toLowerCase().indexOf(value8.toLowerCase()) === -1){
          return false;
        }
        if (value9 && item[9].toLowerCase().indexOf(value9.toLowerCase()) === -1){
          return false;
        }
        return true;
      })
    }
    else{
      return items;
    }
  }
}