import { FunctionComponent } from 'react';

import { Block } from 'types';

type Props = Partial<Pick<Block, 'id' | 'type'>>;

const Unknown: FunctionComponent<Props> = ({ id, type }) => (
  <div className="p-2 bg-yellow-200 text-slate-600">
    {typeof type === 'undefined' && <p>Unknown block type.</p>}
    {typeof type !== 'undefined' && (
      <p>There is either no renderer for "{type}" block type or data format mismatch.</p>
    )}

    <p>Please contact our support to get more details.</p>

    {typeof id === 'string' && (
      <p>
        Block ID: <code>{id}</code>
      </p>
    )}
  </div>
);

export default Unknown;
