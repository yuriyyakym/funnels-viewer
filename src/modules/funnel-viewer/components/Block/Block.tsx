import { FunctionComponent } from 'react';

import {
  isTextBlock,
  type Block as BlockType,
  isButtonBlock,
  isListBlock,
  isImageBlock,
} from 'types';

import { Button, Image, List, Text, Unknown } from './components';

interface Props {
  block: BlockType | unknown;
}

const Block: FunctionComponent<Props> = ({ block }) => {
  if (isTextBlock(block)) {
    return <Text {...block} />;
  }

  if (isButtonBlock(block)) {
    return <Button {...block} />;
  }

  if (isImageBlock(block)) {
    return <Image {...block} />;
  }

  if (isListBlock(block)) {
    return <List {...block} />;
  }

  return <Unknown {...(block || {})} />;
};

export default Block;
