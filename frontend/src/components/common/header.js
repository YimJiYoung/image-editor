import React from 'react';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { pathUri } from '../../constants/path';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    padding: `0 ${theme.spacing(3)}px`,
    backgroundColor: 'whitesmoke',
  },
}));

const Header = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { data, handlelogout } = props;
    // const { userName } = data;
    const userName = 'test';
  
    return (
      <header className={classes.header}>
        <div> Image Editor </div>
        <div>
          {
            userName !== ''
              ? <Button onClick={handlelogout}>{userName}</Button>
              : <Link component={RouterLink} to={pathUri.signin}>Sign in</Link>
          }
        </div>
      </header>
    );
  };
  
//   Header.propTypes = {
//     data: PropTypes.object,
//     handlelogout: PropTypes.func,
//   };
  
  export default Header;