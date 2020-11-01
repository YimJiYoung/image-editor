import React, { createContext, useState} from 'react';
import Routes from './routes';
import HeaderContainer from './container/common/HeaderContainer';
import { HashRouter as Router } from 'react-router-dom';
import userContext  from './utils/context';

function App() {
  const [state, setState] = useState({
    userName: '',
  });
  const contextProps = {
    data: state,
    setData: setState,
  };

  return (
    <Router>
      <userContext.Provider value={contextProps}>
          <HeaderContainer/>
          <Routes />
      </userContext.Provider>
    </Router>
  );
}

export default App;
