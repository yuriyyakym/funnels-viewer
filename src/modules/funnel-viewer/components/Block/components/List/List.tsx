import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { ListBlock } from 'types';

import { ListItem } from './components';

interface Props extends Pick<ListBlock, 'items'> {
  className?: string;
}

const List: FunctionComponent<Props> = ({ className, items }) => (
  <div className={classNames(className, 'flex flex-col gap-2')}>
    {items.map((item, index) => (
      <ListItem key={`${item.title}-${index}`} {...item} />
    ))}
  </div>
);

export default List;
