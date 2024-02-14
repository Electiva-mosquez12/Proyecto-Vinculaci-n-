import React from 'react';
import { Button, Grid, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = React.useState({
    cedula: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    sexo: '',
    birthdayMonth: '',
    birthdayDay: '',
    birthdayYear: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza la lógica de inicio de sesión
    navigate('/SignIn');
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

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{ margin: 'auto' }}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <Typography variant="h5" component="h2" align="center">
            Registro
          </Typography>
          <TextField
            name="cedula"
            label="Cédula"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.cedula}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="nombre"
            label="Nombre"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.nombre}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="apellido"
            label="Apellido"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.apellido}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.email}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="telefono"
            label="Teléfono"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.telefono}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
            <InputLabel id="sexo-label">Sexo</InputLabel>
            <Select
              labelId="sexo-label"
              name="sexo"
              value={formState.sexo}
              onChange={handleChange}
              label="Sexo"
            >
              <MenuItem value="masculino">Masculino</MenuItem>
              <MenuItem value="femenino">Femenino</MenuItem>
            </Select>
          </FormControl>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <TextField
                name="birthdayDay"
                label="Día"
                variant="outlined"
                size="small"
                fullWidth
                value={formState.birthdayDay}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="birthdayMonth"
                label="Mes"
                variant="outlined"
                size="small"
                fullWidth
                value={formState.birthdayMonth}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="birthdayYear"
                label="Año"
                variant="outlined"
                size="small"
                fullWidth
                value={formState.birthdayYear}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <TextField
            name="username"
            label="Usuario"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.username}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.password}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <TextField
            name="confirmPassword"
            label="Confirmar contraseña"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            value={formState.confirmPassword}
            onChange={handleChange}
            style={{ marginBottom: '16px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={buttonStyle}
          >
            Continuar
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Register;
