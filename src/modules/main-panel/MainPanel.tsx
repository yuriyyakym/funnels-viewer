import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { Message } from 'components';
import {
  useActivePageId,
  useFunnel,
  useIsValidFunnel,
  useIsValidJsonCode,
  useSetActivePageId,
  useSetViewportSize,
  useViewportSize,
} from 'state';
import { Page } from 'types';

import { PagesNavigation, ViewportSelect, ViewportSizeInput } from './components';

interface Props {
  className?: string;
}

const FunnelSource: FunctionComponent<Props> = ({ className }) => {
  const funnel = useFunnel();
  const viewportSize = useViewportSize();
  const setViewportSize = useSetViewportSize();
  const activePageId = useActivePageId();
  const setActivePageId = useSetActivePageId();
  const isValidJson = useIsValidJsonCode();
  const isValidFunnel = useIsValidFunnel();

  const handlePageChange = (page: Page) => {
    setActivePageId(page.id);
  };

  return (
    <div className={classNames(className, 'flex flex-col gap-3')}>
      {!isValidJson && <Message variant="error">Invalid JSON</Message>}

      {!isValidFunnel && (
        <Message variant="error">Provided JSON does not conform to expected schema</Message>
      )}

      {funnel !== null && (
        <>
          <h1 className="text-lg font-semibold">{funnel.name}</h1>

          <PagesNavigation
            activePageId={activePageId}
            pages={funnel.pages}
            onPageSelect={handlePageChange}
          />

          <div className="flex gap-2">
            <ViewportSelect value={viewportSize} onChange={setViewportSize} />
            <ViewportSizeInput value={viewportSize} onChange={setViewportSize} />
          </div>
        </>
      )}
    </div>
  );
};

export default FunnelSource;
