import React from 'react';
import classNames from 'classnames';
import './style.css';
import {useHistory, useLocation} from 'react-router-dom'
import routes from '../Constant/routes'
import { useDispatch } from 'react-redux';
import { setModal } from '../Action/modalsAction';
import { ModalTypes } from '../Constant/modalTypes';

const Menu = (props) => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className={props.className}>
            {routes.map((route) => 
                <div
                    className={classNames('nav-item-custom', {
                        'nav-active': location.pathname.startsWith(route.href)
                    })}
                    onClick={() => history.push(route.href)}
                >
                    {route.label}
                </div>
            )}
            <div
                className="nav-item-custom"
                onClick={() => dispatch(setModal(ModalTypes.ATTRIBUTIONS))}
            >
                Attributions
            </div>
        </div>
    )

    
}
export default Menu