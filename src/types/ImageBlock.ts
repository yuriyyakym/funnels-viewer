import { isObject } from 'utils';

import Id from './Id';

export default interface ImageBlock {
  id: Id;
  type: 'image';
  src: string;
}

export const isImageBlock = (value: unknown): value is ImageBlock =>
  isObject(value) &&
  value.type === 'image' &&
  typeof value.id === 'string' &&
  typeof value.src === 'string';
