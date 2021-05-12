import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from './Common/Logo';
import Avatar from 'react-avatar';
import { Button, Dropdown } from 'react-bootstrap';
import { signout } from '../Action/userAction';
import classNames from 'classnames';

const Header = (props) => {
    const {userInfo} = useSelector(state => state.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const date = new Date();
    
    const getWelcome = () => {
      if (date.getHours() < 12) {
          return 'Good Morning';
      } else if (date.getHours() < 18) {
          return 'Good Afternoon'
      } else {
          return 'Good Evening';
      }
    };


    return (
      <div className={classNames(
          props.className,
          "p-3 d-flex justify-content-between align-items-center header"
        )}
      >
        <Logo className="logo" onClick={() => history.push('/')}/>
        <Dropdown>
          <Dropdown.Toggle as={'div'} className='user-dropdown'>
            <span>{`${getWelcome()}, ${userInfo.displayName}`}</span>
            <Avatar
              name={userInfo.displayName}
              src={userInfo.photoURL}
              size={40}
              round
            />
          </Dropdown.Toggle>
          
          <Dropdown.Menu as={'div'} className='p-3 d-flex flex-column dropdown-menu align-items-center'>
            <Avatar
              name={userInfo.displayName}
              src={userInfo.photoURL}
              size={80}
              round
            />
            <div>
              {userInfo.displayName}
            </div>
            <strong>
              {userInfo.email}
            </strong>
            <div className='divider'/>
            <Button
              onClick={() => dispatch(signout())}
              className='mt-4'
              variant='outline-danger'
            >Sign Out</Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )

    
}
export default Header