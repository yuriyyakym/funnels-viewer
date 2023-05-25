import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Size } from 'types';

const IPHONE_SE_VIEWPORT_SIZE: Size = {
  width: 375,
  height: 667,
};

const viewportSizeAtom = atomWithStorage<Size>('preview-viewport-size', IPHONE_SE_VIEWPORT_SIZE);

export const useViewportSizeState = () => useAtom(viewportSizeAtom);
