import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], searchTerm: any, searchBy: string) {

    if (!searchTerm) {
      return items;
    }

    if (searchTerm.length>=3) {
      return items.filter(item => {
        const currentItem = item[searchBy];
        return currentItem.toString().toLowerCase().includes(searchTerm.trim().toLowerCase());
      });
    }
    else{
      return items;
    }
    
  }

}
