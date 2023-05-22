import { isObject } from 'utils';

import Block, { isBlock } from './Block';
import Id from './Id';

export default interface Page {
  id: Id;
  blocks: Block[];
}

export const isPage = (value: unknown): value is Page =>
  isObject(value) &&
  typeof value.id === 'string' &&
  Array.isArray(value.blocks) &&
  value.blocks.every(isBlock);
