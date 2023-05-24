import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { Button } from 'components';
import { Page } from 'types';

interface Props {
  className?: string;
  activePageId: Page['id'] | null;
  pages: Page[];
  onPageSelect: (page: Page) => void;
}

const PagesNavigation: FunctionComponent<Props> = ({
  activePageId,
  className,
  pages,
  onPageSelect,
}) => (
  <nav className={classNames(className, 'flex gap-2')}>
    {pages.map((page, index) => (
      <Button
        disabled={page.id === activePageId}
        key={page.id}
        variant={page.id === activePageId ? 'blue' : 'slate'}
        onClick={() => onPageSelect(page)}
      >
        {index + 1}
      </Button>
    ))}
  </nav>
);

export default PagesNavigation;
