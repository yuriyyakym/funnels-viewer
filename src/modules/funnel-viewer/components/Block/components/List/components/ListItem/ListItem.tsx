import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { type ListItem as ListItemType } from 'types';

interface Props extends ListItemType {
  className?: string;
}

const ListItem: FunctionComponent<Props> = ({ className, description, src, title }) => (
  <div className={classNames(className, 'flex items-center')}>
    <img className={classNames('w-16 h-16', 'mr-4', 'rounded-full')} src={src} alt={title} />

    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

export default ListItem;
