import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'
import cat from '../resources/images/cat.jpg'
import './style.css';
import { useHistory } from 'react-router-dom';
// import { Logo } from './common/Logo';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { useSelector } from 'react-redux';

const Header = () => {
    const userInfo = useSelector(state => state.user);
    const history = useHistory();

    return (
        <div> 
        <header className="grid-container--header">
          <div className="grid-container--brand">
            <EventAvailableIcon style={{fontSize: 40, color: '#fff', marginRight: 6}}/>
            <div onClick={history.push('/')}>Productivity</div>
          </div>
          <div className='signin-title'>
            {userInfo != null? userInfo.userInfo != null?<a href='/dashboard'>
              {userInfo.userInfo.displayName}</a> :<a href='/signin'>Sign In</a>: <a href='/signin'>Sign In</a>}
          </div>
        </header>
            
        </div>
    )

    
}
export default Header