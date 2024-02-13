import React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';  // Cambia useHistory por useNavigate

const SignIn = () => {
  const navigate = useNavigate();  // Cambia useHistory por useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/dashboard');  // Cambia history.push por navigate
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5" component="h2">
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<LockOpen />}
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </Grid>
      <Grid item>
        <Typography variant="body2" component="p">
          Don't have an account?{' '}
          <strong onClick={() => navigate('/register')}>Register</strong>  // Cambia history.push por navigate
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignIn;
