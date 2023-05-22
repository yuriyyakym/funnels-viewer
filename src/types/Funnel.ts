import { isObject } from 'utils';

import Color from './Color';
import Page, { isPage } from './Page';

export default interface Funnel {
  name: string;
  bgColor: Color;
  pages: Page[];
}

export const isFunnel = (value: unknown): value is Funnel =>
  isObject(value) &&
  typeof value.name === 'string' &&
  typeof value.bgColor === 'string' &&
  Array.isArray(value.pages) &&
  value.pages.every(isPage);
