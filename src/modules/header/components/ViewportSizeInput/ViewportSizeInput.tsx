import React from 'react';
import { FunctionComponent } from 'react';

import { Size } from 'types';

interface Props {
  value: Size;
  onChange: (size: Size) => void;
}

const ViewportSizeInput: FunctionComponent<Props> = ({ value, onChange }) => {
  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const width = parseInt(event.target.value);
    onChange({ ...value, width });
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const height = parseInt(event.target.value);
    onChange({ ...value, height });
  };

  return (
    <div>
      <input
        id="widthInput"
        type="number"
        value={value.width}
        onChange={handleWidthChange}
        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <span className="mx-1">&times;</span>
      <input
        id="heightInput"
        type="number"
        value={value.height}
        onChange={handleHeightChange}
        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default ViewportSizeInput;
