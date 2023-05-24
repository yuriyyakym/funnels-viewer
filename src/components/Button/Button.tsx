import classNames from 'classnames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'blue' | 'slate' | 'yellow';
}

const Button: FunctionComponent<Props> = ({ className, children, variant = 'blue', ...rest }) => {
  return (
    <button
      className={classNames(
        className,
        'py-1 px-2',
        'rounded',
        'text-white disabled:text-opacity-80 font-bold',
        {
          'bg-blue-400 hover:bg-blue-500 disabled:bg-blue-500': variant === 'blue',
          'bg-slate-400 hover:bg-slate-500 disabled:bg-slate-500': variant === 'slate',
          'bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-500': variant === 'yellow',
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
