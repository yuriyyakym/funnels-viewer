import { ChangeEventHandler, FunctionComponent } from 'react';

import { Size } from 'types';

import { SIZES_OPTIONS } from './constants';

interface Props {
  value: Size;
  onChange: (selectedSize: Size) => void;
}

const ViewportSelect: FunctionComponent<Props> = ({ value, onChange }) => {
  const serializedValue = serializeSize(value);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedSize = deserializeSize(event.target.value);
    const option = SIZES_OPTIONS.find((size) => areSizesEqual(size.value, selectedSize));
    if (option) {
      onChange(option.value);
    }
  };

  const isDefaultSize = SIZES_OPTIONS.some((option) => {
    return value.height === option.value.height && value.width === option.value.width;
  });

  return (
    <select
      className="px-2 py-1 rounded border border-gray-300"
      onChange={handleChange}
      value={serializedValue}
    >
      {!isDefaultSize && <option value={serializeSize(value)}>Custom</option>}

      {SIZES_OPTIONS.map((option) => {
        const isSelectedOption = areSizesEqual(option.value, value);

        return (
          <option key={option.label} value={serializeSize(option.value)}>
            {option.label}
            {!isSelectedOption && (
              <>
                ({option.value.width}&times;{option.value.height})
              </>
            )}
          </option>
        );
      })}
    </select>
  );
};

const serializeSize = ({ height, width }: Size) => `${width}x${height}`;

const deserializeSize = (size: string): Size => {
  const [width, height] = size.split('x').map((value) => parseInt(value, 10));
  return { width, height };
};

const areSizesEqual = (size1: Size, size2: Size) =>
  size1.width === size2.width && size1.height === size2.height;

export default ViewportSelect;
