import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { Size } from 'types';

const viewportSizeAtom = atomWithStorage<Size>('preview-viewport-size', {
  width: 1440,
  height: 900,
});

export const useViewportSize = () => useAtomValue(viewportSizeAtom);

export const useSetViewportSize = () => useSetAtom(viewportSizeAtom);
