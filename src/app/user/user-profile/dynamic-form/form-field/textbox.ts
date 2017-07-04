/**
 * Created by Administrator on 2017/6/6 0006.
 */
import {FieldBase} from './field-base';

export class Textbox extends FieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
