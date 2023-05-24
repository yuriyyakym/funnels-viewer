import { FunctionComponent } from 'react';
import classNames from 'classnames';

type Props = {
  children: string;
  className?: string;
  variant: 'info' | 'error' | 'warning';
};

const Message: FunctionComponent<Props> = ({ children, className, variant }) => (
  <div
    className={classNames(className, 'p-4 w-full', {
      'bg-blue-100 text-blue-700': variant === 'info',
      'bg-red-100 text-red-700': variant === 'error',
      'bg-yellow-100 text-yellow-700': variant === 'warning',
    })}
  >
    <p>{children}</p>
  </div>
);

export default Message;
