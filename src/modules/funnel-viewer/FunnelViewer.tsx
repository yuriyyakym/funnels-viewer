import { FunctionComponent } from 'react';

import { Message } from 'components';
import { useViewportSize } from 'state';
import { type Page as PageType, type Funnel } from 'types';

import { Page, Viewport } from './components';

interface Props {
  page: PageType | null;
  funnel: Funnel | null;
}

const FunnelViewer: FunctionComponent<Props> = ({ funnel, page }) => {
  const viewportSize = useViewportSize();

  if (funnel === null || page === null) {
    return <Message variant="info">Preview unavailable</Message>;
  }

  const { blocks } = page;
  const { bgColor: backgroundColor } = funnel;

  return (
    <Viewport size={viewportSize}>
      <Page blocks={blocks} style={{ backgroundColor }} />
    </Viewport>
  );
};

export default FunnelViewer;
