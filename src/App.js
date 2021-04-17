import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { useSelector} from "react-redux";
import {Row, Col} from 'react-bootstrap'
import { getEntryRoutes, getMainRoutes } from './factories/RouteFactory';

function App() {
  const {userInfo} = useSelector(state => state.user);

  return (
    <div className="grid-container">
      <div className="content"> 
        <Switch>
          {
            userInfo ? 
              getMainRoutes() :
              getEntryRoutes()
          }
        </Switch>         
      </div>
    </div>
  )
}

export default App;
