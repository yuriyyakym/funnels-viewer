import { FunctionComponent } from 'react';

import { Button } from 'components';
import { useActivePageIdState, useFunnel, useRemoveFunnel, useViewportSizeState } from 'state';
import { Page } from 'types';

import { PagesNavigation, Section, ViewportSelect, ViewportSizeInput } from './components';

const Header: FunctionComponent = () => {
  const funnel = useFunnel();
  const removeFunnel = useRemoveFunnel();
  const [viewportSize, setViewportSize] = useViewportSizeState();
  const [activePageId, setActivePageId] = useActivePageIdState();

  return (
    <header className="flex flex-wrap items-center p-3 bg-gray-100 shadow-md">
      <div className="flex items-center w-full sm:w-auto">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        {funnel && <h1 className="text-xl ml-3 font-bold cursor-default mr-10">{funnel.name}</h1>}
        {funnel && (
          <PagesNavigation
            activePageId={activePageId}
            pages={funnel.pages}
            onPageSelect={(page: Page) => setActivePageId(page.id)}
          />
        )}
      </div>

      {funnel && (
        <div className="flex flex-1 justify-end gap-12">
          <Section title="Viewport">
            <div className="flex gap-3">
              <ViewportSelect value={viewportSize} onChange={setViewportSize} />
              <ViewportSizeInput value={viewportSize} onChange={setViewportSize} />
            </div>
          </Section>

          <Button variant="slate" onClick={removeFunnel}>
            Close
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
