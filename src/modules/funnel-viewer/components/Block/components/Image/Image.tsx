import classNames from 'classnames';
import { FunctionComponent, useEffect, useState } from 'react';

import { Spinner } from 'components';
import { ImageBlock } from 'types';

type Props = Pick<ImageBlock, 'src'>;

const SPINNER_SHOW_DELAY = 200;

const Image: FunctionComponent<Props> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      // Show spinner with delay, so that if images are loaded fast or from cache, spinner does not blink
      const timeoutId = setTimeout(setIsSpinnerVisible, SPINNER_SHOW_DELAY, true);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  const handleLoadStart = () => {
    setIsLoading(true);
    setIsSpinnerVisible(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setIsSpinnerVisible(false);
  };

  return (
    <>
      {isLoading && (
        /**
         * @description Using 16:9 aspect ratio in order to reduce CLS when image is loaded (assuming 16:9 is the most popular one)
         * @todo Use aspect ratio from image block data when available
         * @link https://github.com/yuriyyakym/funnels-viewer/issues/3
         */
        <div className="aspect-image flex items-center justify-center w-full">
          {isSpinnerVisible && (
            <div className="w-6 h-6">
              <Spinner />
            </div>
          )}
        </div>
      )}

      <img
        alt="Funnel image"
        className={classNames('w-full', { hidden: isLoading })}
        src={src}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
      />
    </>
  );
};

export default Image;
