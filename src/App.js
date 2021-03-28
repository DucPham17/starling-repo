<<<<<<< HEAD
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import Lists from './pages/Lists'
function App() {
  return(
    <div>
      <Header/>
      <Menu/>
      
      <Switch> 
        {/*<Route exact path="/" component={}/>*/}
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/report" component={Report}/>
        <Route exact path="/lists" component={Lists}/>

        {/* Here will be the router of our App to others component
              there is an example:
              <Route path="/" exact={true} component={HomeScreen} /> */}
      </Switch>
      <Footer/>
      
      <div className="grid-container">
        {/* Change the header at here */}
        
        {/*<header className="grid-container--header">
          <div className="grid-container--brand">
            <EventAvailableIcon style={{ fontSize: 40, color: '#aaa', marginRight: 6 }} />
            <Link to="/">Productivity</Link>
          </div>
        </header>*/}
        <main>
          <div className="content">

            

          </div>
        </main>

        {/* Change the footer at here */}
        <footer className="grid-container--footer">

        </footer>

      </div>
=======
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Homepage.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
  <BrowserRouter>
    <div className="grid-container">
      {/* Change the header at here */}
      <h1 className="grid-container--header">
      Welcome to our Workspace.
      </h1>
      <div className="grid-container--body">
      Wasting time and energy trying to stay organized? We can help. Our app is designed to manage your tasks, expenses, and schedules into a personalised dashboard. 
      </div>
        <div className="grid-container--brand">
          <Link to="/signUp">
            <Button variant="secondary">
            <EventAvailableIcon style={{ fontSize: 20, color: '#aaa', marginRight: 6 }} />
            Try our Workpace</Button>
          </Link>
          </div>
          <div className="grid-container--body">
          <Link to="/login">
              Already Have an Account? Sign In.
          </Link>
          </div>
          

      <main>
        <div className="content">

          {/* Here will be the router of our App to others component
            there is an example:
            <Route path="/" exact={true} component={HomeScreen} /> */}

        </div>
      </main>

      {/* Change the footer at here */}
      <footer className="grid-container--footer">

      </footer>

>>>>>>> Ruhee
    </div>
  )
}

export default App;
