import { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const Section: FunctionComponent<Props> = ({ children, title }) => (
  <div className="flex items-center gap-3">
    <h2 className="text-md font-semibold">{title}</h2>
    {children}
  </div>
);

export default Section;
