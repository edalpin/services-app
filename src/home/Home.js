import './home.css';

// Router
import { useHistory } from 'react-router-dom'

// Material design components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Home() {
  const history = useHistory();

  function handleRedirection(module, action) {
    const path = action ? `${module}/${action}` : module;
    history.push(path);
  }

  return(
    <div className="home-container">
      <h1 className="home-container__title">Panel administrativo</h1>
      <Card className="home-container__card">
        <CardHeader title="Usuarios"/>
        <CardContent>
          <List component="nav">
            <ListItem
              button
              onClick={() => handleRedirection('usuarios', 'crear')}
            >
              <ListItemText primary="Crear"></ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => handleRedirection('usuarios', null)}
            >
              <ListItemText primary="Listar"></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
