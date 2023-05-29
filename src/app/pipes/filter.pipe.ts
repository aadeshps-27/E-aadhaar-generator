import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allDetails:any[],searchkey:string,propName:string): any[] {
    const result : any [] = [];
    if(!allDetails  ||  searchkey==''  || propName == ''){
      return allDetails;
    }

  allDetails.forEach((details:any)=>{
    if(details[propName].trim().toLowerCase().includes(searchkey.toLowerCase().trim())){
      result.push(details)

    }
  })
    return   result;
  }

}
