import { isObject } from 'utils';
import Alignment from './Alignment';
import Color from './Color';
import Id from './Id';

export default interface TextBlock {
  id: Id;
  type: 'text';
  text: string;
  color: Color;
  align: Alignment;
}

export const isTextBlock = (value: unknown): value is TextBlock =>
  isObject(value) &&
  value.type === 'text' &&
  typeof value.id === 'string' &&
  typeof value.text === 'string' &&
  typeof value.color === 'string' &&
  typeof value.align === 'string';
