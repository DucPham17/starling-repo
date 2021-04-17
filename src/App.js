import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { useSelector} from "react-redux";
import SignInPage from './Pages/SignInPage/SignInPage';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Report from "./Pages/Report/Report";
import Lists from "./Pages/ListPage/Lists";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import Menu from './Component/Menu'
import Expense from './Pages/Expense/Expense'
import {Row, Col} from 'react-bootstrap'

function App() {
  const userInfo = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="grid-container--header">
          <div className="grid-container--brand">
            <EventAvailableIcon style={{fontSize: 40, color: '#fff', marginRight: 6}}/>
            <Link to="/">Productivity</Link>
          </div>
          <div className='signin-title'>
            {userInfo != null? userInfo.userInfo != null?<a href='/dashboard'>
              {userInfo.userInfo.displayName}</a> :<a href='/signin'>Sign In</a>: <a href='/signin'>Sign In</a>}
          </div>
        </header>

        <main> 
          <div className="content">
            <Route exact path="/dashboard" component={Dashboard} /> 
            <Route exact path="/report" component={Report} /> 
            <Route exact path="/lists" component={Lists} /> 
            <Route exact path="/" component={LandingPage} /> 
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} /> 
            <Route exact path="/expense" component={Expense}/>             
          </div>

        </main>
        <footer className="grid-container--footer">
          Let's Productivity
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App;
