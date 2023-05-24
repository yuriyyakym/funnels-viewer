import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-resizable/css/styles.css';

import App from './App.tsx';
import './index.css';

const rootNode = document.getElementById('root');

if (rootNode === null) {
  throw new Error('Root node not found');
}

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
