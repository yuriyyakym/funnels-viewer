import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Size } from 'types';

const viewportSizeAtom = atomWithStorage<Size>('preview-viewport-size', {
  width: 466,
  height: 900,
});

export const useViewportSizeState = () => useAtom(viewportSizeAtom);
