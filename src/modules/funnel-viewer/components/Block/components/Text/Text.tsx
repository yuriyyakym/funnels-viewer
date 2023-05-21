import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { TextBlock } from 'types';

type Props = Pick<TextBlock, 'align' | 'color' | 'text'>;

const Text: FunctionComponent<Props> = ({ align, color, text }) => (
  <div
    className={classNames('px-2', {
      'text-center': align === 'center',
      'text-left': align === 'left',
      'text-right': align === 'right',
    })}
    style={{ color }}
  >
    {text}
  </div>
);

export default Text;
