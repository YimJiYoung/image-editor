import React from 'react';
import { PropTypes } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const FormField = (props) => {
  const {
    loginState, login, loginAsGuest 
  } = props;

  const [state, setState] = React.useState({
    loginState,
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name } = event.target;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
            Image Editor
        </Grid>

        {(!state.loginState)
        && (
          <Grid item xs={12}>
            <TextField
              required
              id="userName"
              label="Name"
              variant="filled"
              name="userName"
              onChange={handleChange}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Email"
            variant="filled"
            name="email"
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={12}>
        <TextField
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            name="password"
            onChange={handleChange}
        />
        </Grid>

        {(!state.loginState)
        && (
          <Grid item xs={12}>
            <TextField
              required
              id="confirmPassword"
              label="confirmPassword"
              type="password"
              variant="filled"
              name="confirmPassword"
              onChange={handleChange}
            />
          </Grid>
        )}

        <Grid item xs={12}>
            <Button
            variant="contained"
            color="primary"
            onClick={(e) => { login(state); }}
            >
            {state.loginState ? 'Sign in' : 'Sign up'}
            </Button>
        </Grid>
        <Grid item xs={12}>
          <Button>
            Sign in as a guest
          </Button>
        </Grid>
      </Grid>
    </>
  );
};


// FormField.propTypes = {
//     login: PropTypes.bool.isRequired,
//     onChange: PropTypes.func,
//     onSubmit: PropTypes.func,
//     remember: PropTypes.bool,
// };
  
export default FormField;