import './EditaUsuario.css';

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

function EditaUsuario(){

    let user = { name:'Juan Pérez', 
      id: 672232, 
      typeId: 'Cédula',  
      email: 'jo_128@gmail.com', 
      phone: 123133,
      username: "jperez",
      password: 123344
    };

    const onClick = () => {
        const id = toast.success('Usuario Editado Correctamente');
    }
    
      return(
        <form noValidate className="edition-form">
          <Typography component="h1" variant="h5">
            Formulario de Edición de Usuario       
          </Typography>
      
          <TextField
            variant="filled"
            margin="normal"
            value={user.typeId}
            required
            /*fullWidth*/
            id="userTypeId"
            label="Tipo de Identificación"
            name="userTypeId"
            autoComplete="userTypeId"
            autoFocus
          />
      
          <TextField
            variant="filled"
            margin="normal"
            value={user.id}
            required
            /*fullWidth*/
            id="userId"
            label="Identificación"
            name="userId"
            autoComplete="userId"
            autoFocus
          />
    
          <TextField
            variant="filled"
            margin="normal"
            value={user.email}
            required
            /*fullWidth*/
            name="email"
            label="Correo"
            type="email"
            id="email"
            autoComplete="email"
          />
      
          <TextField
            variant="filled"
            margin="normal"
            value={user.phone}
            required
            /*fullWidth*/
            name="phone"
            label="Número de Teléfono"
            type="phone"
            id="phone"
            autoComplete="phone"
          /> 
    
          <TextField
            variant="filled"
            margin="normal"
            value={user.username}
            required
            /*fullWidth*/
            name="username"
            label="Nombre de Usuario"
            type="username"
            id="username"
            autoComplete="username"
          /> 
    
          <TextField
            variant="filled"
            margin="normal"
            value={user.password}
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
            Editar Usuario
          </Button>
        </form>
      );
}

export default EditaUsuario;