import React from 'react';
import Routes from './routes';
import Header from './components/common/header';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
          {/* <HeaderContainer /> */}
          <Header/>
          <Routes />
    </Router>
  );
}

export default App;
