import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';



function App() {
  return(
  <BrowserRouter>
    <div className="grid-container">
      {/* Change the header at here */}

      <header className="grid-container--header">
        <div className="grid-container--brand">
          <EventAvailableIcon style={{ fontSize: 40, color: '#aaa', marginRight: 6 }} />
          <Link to="/">Productivity</Link>
        </div>
      </header>
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

    </div>
  </BrowserRouter>
  )
}

export default App;
