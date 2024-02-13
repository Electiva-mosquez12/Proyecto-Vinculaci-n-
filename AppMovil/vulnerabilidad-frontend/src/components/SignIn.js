import React from 'react';
import { Button, TextField, Grid, Typography, Link, Paper } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/dashboard');
  };

  const containerStyle = {
    background: '#001f3f', // Set a darker blue background color
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const paperStyle = {
    padding: '20px',
    width: '80%', // Make the container smaller
    maxWidth: '400px',
    background: 'white',
    border: '2px solid #001f3f', // Add a border with the same color as the background
  };

  const fieldStyle = {
    marginTop: '16px',
  };

  const buttonStyle = {
    marginTop: '24px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#001f3f', // Set link color to match the background
    cursor: 'pointer',
  };

  return (
    <Grid container style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h5" component="h2">
              Bienvenido
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
                style={fieldStyle}
              />
              <Typography variant="body2" component="p">
                <Link style={linkStyle} onClick={() => navigate('/forgot-username')}>
                  Forgot your username?
                </Link>
              </Typography>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="dense"
                required
                style={fieldStyle}
              />
              <Typography variant="body2" component="p">
                <Link style={linkStyle} onClick={() => navigate('/forgot-password')}>
                  Forgot your password?
                </Link>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<LockOpen />}
                fullWidth
                style={buttonStyle}
              >
                Iniciar Sesión
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignIn;
