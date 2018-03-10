import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  /**
   *              W A R N I N G      ----   I N P U R E   P I P E
   * {pure:true} option it's the angular default behavior: 
   * angular doesn't re-run the filter pipe whenever the data change (updating the array 'servers' or object)!
   * to understand this, do select a 'stable' and add a 'stable server', you won't see any data added to the 
   * filtered list right away!.
   * if the default was {pure:false} angular will re-run the filter everytime the changes occur in the page not only
   * in the data that we focus on (e.g. filters).
   * it costs too much in perfomance!!!, for this reason no built-in filter exists!
   */
  //,pure:false //this might lead to perfomance issues!: filter re-run on every change on the page!
  
})
export class FilterPipe implements PipeTransform {
/**
 * 
 *@param :
 * value: it's an object : 
 *            {instanceType: 'medium',name: 'Production Server', status: 'stable',started: new Date(15, 1, 2017)}
 * filterValue:input value to filter on
 * propertyName: property by which we filter on.
 */

  transform(value: any, filterValue: string, propertyName:string): any {  
    // console.log('inside pipe: '+propertyName+' - '+filterValue );     
    if (filterValue.length > 0 && filterValue !=='all') {
      const result=[];
      for (const element of value){        
        if (element[propertyName] === filterValue ) {
          result.push(element);
        }
      }
      return result;      
    }
    return value;
  }
}
