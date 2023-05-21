import Color from './Color';
import Page from './Page';

export default interface Funnel {
  name: string;
  bgColor: Color;
  pages: Page[];
}
