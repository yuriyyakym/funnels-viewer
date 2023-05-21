import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FunctionComponent<Props> = ({ className, children, ...rest }) => {
  const buttonClasses = classNames(
    className,
    'py-2 px-4',
    'border border-transparent rounded-md',
    'shadow-sm text-sm font-medium',
    'text-white bg-indigo-600 hover:bg-indigo-700',
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
