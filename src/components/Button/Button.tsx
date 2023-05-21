import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FunctionComponent<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      className={classNames(
        className,
        'py-1 px-2',
        'rounded',
        'text-white disabled:text-opacity-80 font-bold',
        'bg-blue-300 hover:bg-blue-400 disabled:bg-blue-200',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
