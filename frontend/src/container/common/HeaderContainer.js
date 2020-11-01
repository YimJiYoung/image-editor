import React, { useContext } from 'react';
import Header from '../../components/common/Header';
import userContext from '../../utils/context';

const HeaderContainer = (props) => {
    const { data } = useContext(userContext);
    
    return (
      <Header userName={data.userName}/>
    );
  };

  export default HeaderContainer;