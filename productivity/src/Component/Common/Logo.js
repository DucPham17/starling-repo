import React from 'react';
import classNames from 'classnames';
import logo from '../../resources/images/logo_dark.svg';

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
      <img src={logo} className='mr-2'/>
    </div>
  )
};