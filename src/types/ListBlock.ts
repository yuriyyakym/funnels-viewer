import { isObject } from 'utils';

import type Id from './Id';
import { type default as ListItem, isListItem } from './ListItem';

export default interface ListBlock {
  id: Id;
  type: 'list';
  items: ListItem[];
}

export const isListBlock = (value: unknown): value is ListBlock =>
  isObject(value) &&
  value.type === 'list' &&
  Array.isArray(value.items) &&
  value.items.every(isListItem);
