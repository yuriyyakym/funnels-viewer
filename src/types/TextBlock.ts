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
