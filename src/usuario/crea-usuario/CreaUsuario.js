import React from 'react';
import './CreaUsuario.css';

// Material design components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ToastServive from 'react-material-toast';

const toast = ToastServive.new({
  place: 'bottomLeft',
  duration:2,
  maxCount:8
});

function CreaUsuario() {

  const onClick = () => {
    const id = toast.success('Usuario Creado');
  }

  return(
    <form noValidate className="creation-form">
      <Typography component="h1" variant="h5">
        Formulario de Creación de Usuario
      </Typography>
  
      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        id="userTypeId"
        label="Tipo de Identificación"
        name="userTypeId"
        autoComplete="userTypeId"
        autoFocus
      />
  
      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        id="userId"
        label="Identificación"
        name="userId"
        autoComplete="userId"
        autoFocus
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="email"
        label="Correo"
        type="email"
        id="email"
        autoComplete="email"
      />
  
      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="phone"
        label="Número de Teléfono"
        type="phone"
        id="phone"
        autoComplete="phone"
      /> 

      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="username"
        label="Nombre de Usuario"
        type="username"
        id="username"
        autoComplete="username"
      /> 

      <TextField
        variant="outlined"
        margin="normal"
        required
        /*fullWidth*/
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
      /> 

      <Button
        //type="submit"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Crear Usuario
      </Button>
    </form>
  );
}
  
  export default CreaUsuario;
  