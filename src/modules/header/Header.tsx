import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => (
  <header className="flex flex-wrap items-center justify-between">
    <div className="flex items-center w-full sm:w-auto">
      <img src="/logo.png" alt="Logo" className="w-10 h-10 sm:mr-2" />
      <h1 className="text-xl font-bold">Funnels Viewer</h1>
    </div>
  </header>
);

export default Header;
