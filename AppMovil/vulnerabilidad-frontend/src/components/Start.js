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
    padding: '16px', // Añade un poco de espacio en los bordes
    boxSizing: 'border-box',
  };

  return (
    <Grid container style={containerStyle}>
      <Grid item>
        <Typography variant="h5" component="h2" align="center">
          Sign In
        </Typography>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<LockOpen />}
            fullWidth
          >
            Iniciar Sesión
          </Button>
        </form>
      </Grid>
      <Grid item>
        <Typography variant="body2" component="p" align="center">
          No tienes una cuenta?{' '}
          <strong onClick={() => navigate('/register')}>Regístrate</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Start;
