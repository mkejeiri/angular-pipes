import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
//   transform(value: any, ...args: any[]): any;
    transform(value:string, start:number=0, end:number){
        if (value.length > (end-start+1)) {
            return value.substr(start,end)+'...';            
        }
        return value;
    }

}