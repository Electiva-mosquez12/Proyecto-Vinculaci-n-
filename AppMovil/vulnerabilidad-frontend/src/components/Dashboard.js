import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ChevronLeft />}
          onClick={() => navigate('/')}
        >
          Back to Sign In
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h2">
          Dashboard
        </Typography>
      </Grid>
      {/* Add your dashboard components here */}
    </Grid>
  );
};

export default Dashboard;
