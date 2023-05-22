import ButtonBlock, { isButtonBlock } from './ButtonBlock';
import ImageBlock, { isImageBlock } from './ImageBlock';
import ListBlock, { isListBlock } from './ListBlock';
import TextBlock, { isTextBlock } from './TextBlock';

type Block = ButtonBlock | TextBlock | ListBlock | ImageBlock;

export const isBlock = (value: unknown): value is Block =>
  [isButtonBlock, isTextBlock, isListBlock, isImageBlock].some((typeguard) => typeguard(value));

export default Block;
