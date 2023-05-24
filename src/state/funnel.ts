import { atom, useAtomValue, useSetAtom } from 'jotai';

import { Funnel, Page } from 'types';

const activePageIdAtom = atom<Page['id'] | null>(null);

const funnelAtom = atom<Funnel | null>(null);

export const useFunnel = () => useAtomValue(funnelAtom);

export const useSetFunnel = () => useSetAtom(funnelAtom);

export const useActivePageId = () => useAtomValue(activePageIdAtom);

export const useSetActivePageId = () => useSetAtom(activePageIdAtom);

export const usePage = (id: Page['id']): Page | null => {
  const funnel = useFunnel();

  if (!funnel) {
    return null;
  }

  const page = funnel.pages.find((page) => page.id === id);

  return page ?? null;
};

export const useIsValidFunnel = () => useFunnel() !== null;

export const useActivePage = () => {
  const funnel = useFunnel();
  const activePageId = useActivePageId();

  if (!funnel || !activePageId) {
    return null;
  }

  return funnel.pages.find((page) => page.id === activePageId) ?? null;
};
