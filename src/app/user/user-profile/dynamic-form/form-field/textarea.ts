/**
 * Created by Administrator on 2017/6/6 0006.
 */
import {FieldBase} from './field-base';

export class TextArea extends FieldBase<string> {
  controlType = 'textarea';
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.rows = options['row'] || 1;
  }
}
