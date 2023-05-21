import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { type Block as BlockType } from 'types';

import Block from '../Block';

interface Props {
  className?: string;
  blocks: BlockType[];
}

const Page: FunctionComponent<Props> = ({ blocks, className }) => (
  <div className={classNames(className, 'flex flex-col items-center', 'p-3 md:p-5')}>
    {blocks.map((block, index) => {
      const isFirstBlock = index === 0;

      return (
        <Block
          block={block}
          className={classNames({ 'mt-3 md:mt-5': !isFirstBlock })}
          key={block.id}
        />
      );
    })}
  </div>
);

export default Page;
