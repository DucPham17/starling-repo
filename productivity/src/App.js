import { Switch } from 'react-router-dom';
import './App.css';
import { useSelector} from "react-redux";
import { getEntryRoutes, getMainRoutes } from './Factories/RouteFactory';
import React,{useEffect} from 'react';
import axios from './instance'
function App() {
  const {userInfo} = useSelector(state => state.user);
  
  useEffect(()=> {
    axios.get("/api/users/test").then((data) =>{
      console.log(data);
    });
  },[]);

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
