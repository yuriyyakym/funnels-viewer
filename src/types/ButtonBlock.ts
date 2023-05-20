import Color from './Color';
import Id from './Id';

export default interface ButtonBlock {
  id: Id;
  type: 'button';
  text: string;
  color: Color;
  bgColor: Color;
}
