import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
// import { Logo } from './common/Logo';
import { useSelector } from 'react-redux';
import { Logo } from './Common/Logo';
import Avatar from 'react-avatar';

const Header = () => {
    const {userInfo} = useSelector(state => state.user);
    const history = useHistory();

    return (
      <div className="p-3 d-flex justify-content-between align-items-center header">
        <Logo className="logo" onClick={() => history.push('/')}/>
        <div>
          <span className="mr-3">{`Welcome, ${userInfo.displayName}`}</span>
          <Avatar
            name={userInfo.displayName}
            src={userInfo.photoURL}
            size={50}
            round
          />
        </div>
      </div>
    )

    
}
export default Header