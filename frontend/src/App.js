import React from 'react';
import Routes from './routes';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
          {/* <HeaderContainer /> */}
          <Routes />
    </Router>
  );
}

export default App;
