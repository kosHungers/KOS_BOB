import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DiningListContextProvider } from './Context/DiningListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DiningListContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DiningListContextProvider>,
);
