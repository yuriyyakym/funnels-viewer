import Block from './Block';
import Id from './Id';

export default interface Page {
  id: Id;
  blocks: Block[];
}
