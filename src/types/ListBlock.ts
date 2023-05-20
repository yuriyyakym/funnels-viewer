import Id from './Id';
import ListItem from './ListItem';

export default interface ListBlock {
  id: Id;
  type: 'list';
  items: ListItem[];
}
