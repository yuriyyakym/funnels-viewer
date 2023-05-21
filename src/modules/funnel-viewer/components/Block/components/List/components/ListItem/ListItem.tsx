import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { type ListItem as ListItemType } from 'types';

type Props = ListItemType;

const ListItem: FunctionComponent<Props> = ({ description, src, title }) => (
  <div className="flex items-center">
    <img className={classNames('w-16 h-16', 'mr-4', 'rounded-full')} src={src} alt={title} />

    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

export default ListItem;
