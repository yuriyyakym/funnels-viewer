import classNames from 'classnames';
import { FunctionComponent, CSSProperties } from 'react';

import { type Block as BlockType } from 'types';

import Block from '../Block';

interface Props {
  className?: string;
  blocks: BlockType[];
  style?: CSSProperties;
}

const Page: FunctionComponent<Props> = ({ blocks, className, style }) => (
  <div
    className={classNames(
      className,
      'container',
      'flex flex-col items-center gap-3 md:gap-5',
      'p-3 md:p-5 mx-auto',
    )}
    style={style}
  >
    {blocks.map((block) => (
      <Block block={block} key={block.id} />
    ))}
  </div>
);

export default Page;
