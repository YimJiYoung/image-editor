import React from 'react';
import Container from '@material-ui/core/Container';
import SignInContainer from '../container/signin/SignInContainer';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'white',
    marginTop: '40px',
  },
}))

const SignIn = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
            <SignInContainer/>
        </Container>
    );
};

export default SignIn;