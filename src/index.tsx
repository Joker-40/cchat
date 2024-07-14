import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@sendbird/uikit-react/dist/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);