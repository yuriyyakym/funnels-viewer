import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { TextBlock } from 'types';

interface Props extends Omit<TextBlock, 'id' | 'type'> {
  className?: string;
}

const TextBlock: FunctionComponent<Props> = ({ align, className, color, text }) => (
  <div
    className={classNames(className, 'px-2', {
      'text-center': align === 'center',
      'text-left': align === 'left',
      'text-right': align === 'right',
    })}
    style={{ color }}
  >
    {text}
  </div>
);

export default TextBlock;
