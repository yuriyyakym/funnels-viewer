import Id from './Id';

export default interface ImageBlock {
  id: Id;
  type: 'image';
  src: string;
}
