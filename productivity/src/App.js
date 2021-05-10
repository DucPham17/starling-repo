import { Switch } from 'react-router-dom';
import './App.css';
import { useSelector} from "react-redux";
import { getEntryRoutes, getMainRoutes } from './Factories/RouteFactory';

function App() {
  const {userInfo} = useSelector(state => state.user);

  return (
      <Switch>
        {
          userInfo.uid ? 
            getMainRoutes() :
            getEntryRoutes()
        }
      </Switch>
  )
}

export default App;
