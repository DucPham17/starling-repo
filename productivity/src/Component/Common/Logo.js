import React from 'react';
import classNames from 'classnames';
import logo from '../../Resources/Images/logo192.png';

export const Logo = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <div
      className={classNames(props.className, 'd-flex align-items-center')}
      {...restProps}
    >
      <img src={logo} className='logoImage mr-2'/>
      STARLING
    </div>
  )
};