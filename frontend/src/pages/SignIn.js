import React from 'react';
import Container from '@material-ui/core/Container';
import FormField from '../components/signin/FormField';
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
            <FormField  login={true}/>
        </Container>
    );
};

export default SignIn;