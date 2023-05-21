import { FunctionComponent } from 'react';

import { ListBlock } from 'types';

import { ListItem } from './components';

type Props = Pick<ListBlock, 'items'>;

const List: FunctionComponent<Props> = ({ items }) => (
  <div className="flex flex-col gap-2">
    {items.map((item, index) => (
      <ListItem key={`${item.title}-${index}`} {...item} />
    ))}
  </div>
);

export default List;
