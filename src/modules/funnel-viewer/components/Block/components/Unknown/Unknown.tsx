import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { Block } from 'types';

interface Props extends Pick<Block, 'id' | 'type'> {
  className?: string;
}

const Unknown: FunctionComponent<Props> = ({ className, id, type }) => (
  <div className={classNames(className, 'p-2 bg-yellow-200 text-slate-600')}>
    <p>There is either no renderer for "{type}" block type or data format mismatch.</p>
    <p>Please contact our support in order to get more details.</p>
    <p>Block ID: {id}</p>
  </div>
);

export default Unknown;
