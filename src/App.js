import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

// Components
import Login from './login/Login';
import Home from './home/Home';
import ListaUsuarios from './usuario/lista-usuarios/ListaUsuarios';
import CreaUsuario from "./usuario/crea-usuario/CreaUsuario";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/usuarios/crear" component={CreaUsuario} />
        <Route path="/usuarios" component={ListaUsuarios} />
        <Route path="/">
          <Redirect exact from='/' to='/login'/>
        </Route>
      </Switch>
    </Router>
  );
}
