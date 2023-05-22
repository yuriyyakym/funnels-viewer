import React from 'react';
import classNames from 'classnames';

type MessageProps = {
  variant: 'info' | 'error' | 'warning';
  children: string;
};

const Message: React.FC<MessageProps> = ({ children, variant }) => (
  <div
    className={classNames('p-4 w-full', {
      'bg-blue-100 text-blue-700': variant === 'info',
      'bg-red-100 text-red-700': variant === 'error',
      'bg-yellow-100 text-yellow-700': variant === 'warning',
    })}
  >
    <p>{children}</p>
  </div>
);

export default Message;
