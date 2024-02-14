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
    alignItems: 'center',
    justifyContent: 'space-between',  // Set to 'space-between'
    padding: '16px',
    boxSizing: 'border-box',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    width: '100%',  // Set width to 100%
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
        <div style={formStyle}>
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
        </div>
      </Grid>
      {/* This div acts as a container and will be at the bottom */}
      <div></div>
    </Grid>
  );
};

export default Start;
