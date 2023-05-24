import { FunctionComponent } from 'react';

import FunnelInput from 'modules/funnel-input';
import FunnelViewer from 'modules/funnel-viewer';
import Header from 'modules/header';
import { useActivePage, useActivePageIdState, useFunnelState } from 'state';
import { Funnel } from 'types';

const App: FunctionComponent = () => {
  const [funnel, setFunnel] = useFunnelState();
  const [, setActivePageId] = useActivePageIdState();
  const page = useActivePage();

  const handleFunnelChange = (funnel: Funnel) => {
    const pageId = funnel.pages[0]?.id ?? null;
    setFunnel(funnel);
    setActivePageId(pageId);
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Header />

      <main className="flex-1 p-3 overflow-hidden">
        {funnel && <FunnelViewer backgroundColor={funnel?.bgColor} page={page} />}
        {!funnel && <FunnelInput onChange={handleFunnelChange} />}
      </main>
    </div>
  );
};

export default App;
