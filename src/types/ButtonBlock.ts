import { isObject } from 'utils';

import Color from './Color';
import Id from './Id';

export default interface ButtonBlock {
  id: Id;
  type: 'button';
  text: string;
  color: Color;
  bgColor: Color;
}

export const isButtonBlock = (value: unknown): value is ButtonBlock =>
  isObject(value) &&
  value.type === 'button' &&
  typeof value.id === 'string' &&
  typeof value.text === 'string' &&
  typeof value.color === 'string' &&
  typeof value.bgColor === 'string';
