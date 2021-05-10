import React from 'react';
import './style.css';
import classNames from 'classnames';

const Footer = (props) => {
    return (
        <div
            className={classNames(props.className, 'footer')}
        > 
            <span>2021 © Starling Group</span>
        </div>
    )    
}
export default Footer