import { render } from 'react-dom';
import * as React from 'react';
import { App } from './components/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
