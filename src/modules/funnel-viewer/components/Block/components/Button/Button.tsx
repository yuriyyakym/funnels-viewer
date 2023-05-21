import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { ButtonBlock } from 'types';

type Props = Pick<ButtonBlock, 'bgColor' | 'color' | 'text'>;

const Button: FunctionComponent<Props> = ({ bgColor, color, text }) => (
  <button
    className={classNames(
      'py-2 px-4',
      'text-white font-bold',
      'rounded-full',
      'bg-blue-500 hover:bg-blue-700',
    )}
    style={{ backgroundColor: bgColor, color }}
  >
    {text}
  </button>
);

export default Button;
