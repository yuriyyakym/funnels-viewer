import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';

import { Funnel, Page } from 'types';

const activePageIdAtom = atom<Page['id'] | null>(null);

const funnelAtom = atom<Funnel | null>(null);

export const useFunnel = () => useAtomValue(funnelAtom);

export const useFunnelState = () => useAtom(funnelAtom);

export const useActivePageIdState = () => useAtom(activePageIdAtom);

export const usePage = (id: Page['id']): Page | null => {
  const funnel = useFunnel();

  if (!funnel) {
    return null;
  }

  const page = funnel.pages.find((page) => page.id === id);

  return page ?? null;
};

export const useActivePage = () => {
  const funnel = useFunnel();
  const activePageId = useAtomValue(activePageIdAtom);

  if (!funnel || !activePageId) {
    return null;
  }

  return funnel.pages.find((page) => page.id === activePageId) ?? null;
};

export const useRemoveFunnel = () => {
  const setFunnel = useSetAtom(funnelAtom);
  return useCallback(() => setFunnel(null), [setFunnel]);
};
