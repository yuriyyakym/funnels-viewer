import classNames from 'classnames';
import { FunctionComponent, ReactNode, SyntheticEvent, useState } from 'react';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';

import { Size } from 'types';

import getResizeHandle from './getResizeHandle';

interface Props {
  children: ReactNode;
  size: Size;
  onResize: (size: Size) => void;
}

/**
 * `react-resizable` provides size with possible floats.
 * We need to preserve these floats in order to have precize resizing and avoid cursor & handle position desync.
 * It also allows to deffer setting global state, since it's update is not of high priority.
 */

const Viewport: FunctionComponent<Props> = ({ children, size, onResize }) => {
  const [localSize, setLocalSize] = useState(size);

  const handleResize = (_event: SyntheticEvent, data: ResizeCallbackData) => {
    setLocalSize(data.size);

    queueMicrotask(() => {
      onResize({
        height: Math.round(data.size.height),
        width: Math.round(data.size.width),
      });
    });
  };

  const handleResizeStop = () => {
    setLocalSize(size);
  };

  return (
    <div
      className={classNames('flex items-center justify-center', 'w-full h-full', 'overflow-auto')}
    >
      <ResizableBox
        className="border-t border-l border-gray-100 box-content"
        handle={getResizeHandle}
        height={localSize.height}
        resizeHandles={['e', 's', 'se']}
        width={localSize.width}
        onResize={handleResize}
        onResizeStop={handleResizeStop}
      >
        <div className="flex flex-col w-full h-full overflow-auto pb-3 pr-3">{children}</div>
      </ResizableBox>
    </div>
  );
};

export default Viewport;
