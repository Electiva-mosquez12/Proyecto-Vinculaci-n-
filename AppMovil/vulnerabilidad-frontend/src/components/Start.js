import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

import backgroundImage from '../image/vulnerabilidad.jpg';

const Start = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/SignIn');
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '16px',
    boxSizing: 'border-box',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '32px',
  };

  const buttonStyle = {
    marginTop: '16px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
    cursor: 'pointer',
    marginLeft: '8px',
  };

  return (
    <Grid container style={containerStyle}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{ margin: 'auto' }}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <Typography variant="h5" component="h2" align="center">
            Sign In
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
          <Typography variant="body2" component="p" align="center">
            No tienes una cuenta?{' '}
            <strong style={linkStyle} onClick={() => navigate('/register')}>
              Regístrate
            </strong>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};

export default Start;