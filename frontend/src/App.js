import React from 'react';
import Routes from './routes';
import Header from './components/common/Header';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Header/>
          <Routes />
    </Router>
  );
}

export default App;
