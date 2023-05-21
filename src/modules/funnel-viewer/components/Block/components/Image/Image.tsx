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
        <div className="w-6 h-6">
          <Spinner />
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
