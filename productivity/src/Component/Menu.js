import React from 'react';
import classNames from 'classnames';
import './style.css';
import {useHistory, useLocation} from 'react-router-dom'
import routes from '../Constant/routes'

const Menu = (props) => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className={props.className}>
            {routes.map((route) => 
                <div
                    className={classNames('nav-item', {
                        'nav-active': location.pathname === route.href
                    })}
                    onClick={() => history.push(route.href)}
                >
                    {route.label}
                </div>
            )}
        </div>
    )

    
}
export default Menu