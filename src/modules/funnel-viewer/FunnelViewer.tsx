import { FunctionComponent, useState } from 'react';

import { type Funnel } from 'types';

import { Page, PagesNavigation } from './components';

interface Props {
  funnel: Funnel;
}

const FunnelViewer: FunctionComponent<Props> = ({ funnel }) => {
  const [activePageId, setActivePageId] = useState(funnel.pages[0]?.id);
  const { bgColor, name, pages } = funnel;

  const page = pages.find((page) => page.id === activePageId);

  if (!page) {
    return null;
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>{name}</h1>

      <PagesNavigation
        activePageId={activePageId}
        pages={pages}
        onPageSelect={(page) => setActivePageId(page.id)}
      />

      <Page blocks={page.blocks} />
    </div>
  );
};

export default FunnelViewer;
