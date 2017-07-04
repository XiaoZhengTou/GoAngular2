/**
 * Created by Administrator on 2017/6/23 0023.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'boolean'
})

export class BooleanPipe implements PipeTransform {
  constructor() {

  }

  transform(flag: string): string {
    return flag === 'true' ? 'text-danger' : '';
  }
}
