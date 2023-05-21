import classNames from 'classnames';
import { FunctionComponent, useState } from 'react';

import { Spinner } from 'components';
import { ImageBlock } from 'types';

type Props = Pick<ImageBlock, 'src'>;

const Image: FunctionComponent<Props> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        // Using 16:9 aspect ratio in order to reduce CLS (assuming 16:9 is the most popular one)
        <div className="aspect-image flex items-center justify-center w-full">
          <div className="w-6 h-6">
            <Spinner />
          </div>
        </div>
      )}

      <img
        alt="Funnel image"
        className={classNames('w-full', { hidden: isLoading })}
        src={src}
        onLoad={handleLoad}
      />
    </>
  );
};

export default Image;
