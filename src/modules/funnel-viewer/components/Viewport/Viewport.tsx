import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

import { Size } from 'types';

interface Props {
  children: ReactNode;
  size: Size;
}

const Viewport: FunctionComponent<Props> = ({ children, size: { height, width } }) => (
  <div className={classNames('flex items-center justify-center', 'w-full h-full', 'overflow-auto')}>
    <div
      className="border border-gray-100 shadow-md"
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {children}
    </div>
  </div>
);

export default Viewport;
