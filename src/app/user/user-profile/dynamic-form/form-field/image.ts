/**
 * Created by Administrator on 2017/6/6 0006.
 */
import {FieldBase} from './field-base';

export class Image extends FieldBase<string> {
  controlType = 'image';
  src: string;

  constructor(options: {} = {}) {
    super(options);
    this.src = options['src'] || '';
  }
}
