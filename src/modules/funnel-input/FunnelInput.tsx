import { CloudArrowUpIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import {
  ChangeEventHandler,
  DragEventHandler,
  FormEventHandler,
  FunctionComponent,
  useRef,
  useState,
} from 'react';

import { Message } from 'components';
import { Funnel, isFunnel } from 'types';
import { isValidJson } from 'utils';

interface Props {
  onChange: (funnel: Funnel) => void;
}

const FunnelInput: FunctionComponent<Props> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFile = async (file?: File) => {
    if (!file) {
      return;
    }

    try {
      const json = await file.text();

      if (!isValidJson(json)) {
        setError(new Error('Invalid JSON. Please select or drop another file.'));
        return;
      }

      const funnel = JSON.parse(json);

      if (!isFunnel(funnel)) {
        setError(new Error('Provided JSON does not conform to expected Funnel schema.'));
        return;
      }

      onChange(funnel);
    } catch (error) {
      setError(new Error('Unknown error occurred.'));
    }
  };

  const handleDragOver: DragEventHandler = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop: DragEventHandler = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    const [file] = event.dataTransfer.files;
    handleFile(file);
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const [file] = event.target.files || [];
    handleFile(file);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classNames('flex items-center justify-center', 'w-full h-full')}>
      <button
        className={classNames(
          'flex flex-col items-center justify-center py-16 px-24 w-fit border-2 border-dashed border-gray-400 rounded transition-colors',
          'cursor-pointer hover:bg-gray-100',
          {
            'bg-gray-200': isDragOver,
            'bg-white': !isDragOver,
          },
        )}
        tabIndex={0}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center h-full">
            <CloudArrowUpIcon
              className={classNames('w-24 h-24', {
                'text-gray-400': !isDragOver,
                'text-gray-600': isDragOver,
              })}
            />

            <p className="mt-6">Drop or select a Funnel JSON file</p>

            {error && (
              <Message className="mt-8" variant="error">
                {error.message}
              </Message>
            )}

            <input className="hidden" ref={inputRef} type="file" onChange={handleFileChange} />
          </div>
        </form>
      </button>
    </div>
  );
};

export default FunnelInput;
