import classNames from 'classnames';
import { ReactNode, RefObject } from 'react';
import { ResizeHandle } from 'react-resizable';

const getResizeHandle = (
  resizeHandle: ResizeHandle,
  ref: RefObject<HTMLDivElement>,
): ReactNode | undefined => {
  const commonHandleClasses =
    'absolute flex items-center justify-center bg-slate-100 hover:bg-slate-200 shadow-inner';
  const commonIconClasses = 'border-slate-300 box-content';

  if (resizeHandle === 'e') {
    return (
      <div
        className={classNames('top-0 right-0 w-3 h-full cursor-ew-resize', commonHandleClasses)}
        ref={ref}
      >
        <div className={classNames('w-px h-3 border-l border-r', commonIconClasses)} />
      </div>
    );
  }

  if (resizeHandle === 's') {
    return (
      <div
        className={classNames('right-0 bottom-0 w-full h-3 cursor-ns-resize', commonHandleClasses)}
        ref={ref}
      >
        <div className={classNames('w-3 h-px border-t border-b', commonIconClasses)} />
      </div>
    );
  }

  if (resizeHandle === 'se') {
    return (
      <div
        className={classNames('right-0 bottom-0 w-3 h-3 cursor-nwse-resize', commonHandleClasses)}
        ref={ref}
      >
        <div className={classNames('w-1 h-px -rotate-45 border-t border-b', commonIconClasses)} />
      </div>
    );
  }

  return undefined;
};

export default getResizeHandle;
