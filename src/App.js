import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Col, Button, Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Header from './component/Header'
import Footer from './component/Footer'
import Menu from './component/Menu'
import Dashboard from './pages/Dashboard/Dashboard'
import Report from './pages/Report/Report'
import Lists from './pages/Lists'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Row> 
          <Col sm={3}> 
            <Menu/>
          </Col>
          <Col sm={9}>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/report" component={Report}/>
              <Route exact path="/lists" component={Lists}/>
              <Route exact path="/" component={LandingPage}/>
            {/* Here will be the router of our App to others component
                  there is an example:
                  <Route path="/" exact={true} component={HomeScreen} /> */}
          </Col>
        </Row>
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
    </div>
  )
}

export default App;
