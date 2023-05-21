import classNames from 'classnames';
import { FunctionComponent } from 'react';

const Spinner: FunctionComponent = () => (
  <div
    className={classNames(
      'w-full h-full',
      'border-gray-900 border-b-2 rounded-full',
      'animate-spin',
    )}
  />
);

export default Spinner;
