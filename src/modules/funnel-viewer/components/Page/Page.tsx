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
      'flex flex-col items-center flex-1',
      'w-full py-4 gap-4 mx-auto',
      '@2xl:gap-6 @2xl:py-6',
    )}
    style={style}
  >
    {blocks.map((block) => (
      <Block block={block} key={block.id} />
    ))}
  </div>
);

export default Page;
