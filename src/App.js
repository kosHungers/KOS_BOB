import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Home />
      </Router>
    </BrowserRouter>
  );
}

export default App;
