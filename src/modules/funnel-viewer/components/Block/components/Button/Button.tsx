import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { ButtonBlock } from 'types';

interface Props extends Pick<ButtonBlock, 'bgColor' | 'color' | 'text'> {
  className?: string;
}

const Button: FunctionComponent<Props> = ({ bgColor, className, color, text }) => (
  <button
    className={classNames(
      className,
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
