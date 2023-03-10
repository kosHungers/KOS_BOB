import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { DiningListContextProvider } from './Context/DiningListContext';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <DiningListContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DiningListContextProvider>
  </AuthContextProvider>,
);
