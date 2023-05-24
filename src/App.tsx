import classNames from 'classnames';
import { FunctionComponent } from 'react';

import FunnelViewer from 'modules/funnel-viewer';
import MainPanel from 'modules/main-panel';
import Header from 'modules/header';
import { useActivePage, useFunnel } from 'state';

const App: FunctionComponent = () => {
  const funnel = useFunnel();
  const page = useActivePage();

  return (
    <div className="flex w-full h-full overflow-hidden">
      <aside
        className={classNames(
          'w-aside min-w-aside h-full p-2',
          'border-r border-gray-200',
          'bg-gray-50',
          'overflow-auto',
        )}
      >
        <Header />
        <MainPanel className="mt-5" />
      </aside>

      <main className="flex-1 p-2 overflow-hidden">
        <FunnelViewer backgroundColor={funnel?.bgColor} page={page} />
      </main>
    </div>
  );
};

export default App;
