import { isObject } from 'utils';

export default interface ListItem {
  title: string;
  description: string;
  src: string;
}

export const isListItem = (value: unknown): value is ListItem =>
  isObject(value) &&
  typeof value.title === 'string' &&
  typeof value.description === 'string' &&
  typeof value.src === 'string';
