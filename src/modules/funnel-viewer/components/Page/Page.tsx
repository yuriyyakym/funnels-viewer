import classNames from 'classnames';
import { FunctionComponent } from 'react';

import { type Block as BlockType } from 'types';

import Block from '../Block';

interface Props {
  className?: string;
  blocks: BlockType[];
}

const Page: FunctionComponent<Props> = ({ blocks, className }) => (
  <div className={classNames(className, 'flex flex-col items-center gap-3 md:gap-5', 'p-3 md:p-5')}>
    {blocks.map((block) => (
      <Block block={block} key={block.id} />
    ))}
  </div>
);

export default Page;
