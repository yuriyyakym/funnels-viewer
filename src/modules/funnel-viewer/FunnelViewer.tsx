import { FunctionComponent } from 'react';

import { Message } from 'components';
import { useSetViewportSize, useViewportSize } from 'state';
import { type Page as PageType, Color } from 'types';

import { Page, Viewport } from './components';

interface Props {
  backgroundColor?: Color;
  page: PageType | null;
}

const FunnelViewer: FunctionComponent<Props> = ({ backgroundColor, page }) => {
  const viewportSize = useViewportSize();
  const setViewportSize = useSetViewportSize();

  if (page === null) {
    return <Message variant="info">Preview unavailable</Message>;
  }

  return (
    <Viewport size={viewportSize} onResize={setViewportSize}>
      <Page blocks={page.blocks} style={{ backgroundColor }} />
    </Viewport>
  );
};

export default FunnelViewer;
