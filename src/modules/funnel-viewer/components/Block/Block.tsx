import { FunctionComponent } from 'react';

import { isTextBlock, type Block as BlockType, isButtonBlock, isListBlock } from 'types';

import { Button, Text, Unknown } from './components';

interface Props {
  block: BlockType;
  className?: string;
}

const Block: FunctionComponent<Props> = ({ block, className }) => {
  const commonProps = { className };

  if (isTextBlock(block)) {
    return <Text {...commonProps} {...block} />;
  }

  if (isButtonBlock(block)) {
    return <Button {...commonProps} {...block} />;
  }

  return <Unknown {...commonProps} {...block} />;
};

export default Block;