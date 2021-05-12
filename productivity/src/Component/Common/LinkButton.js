import React from 'react';
import { useTheme } from '@material-ui/core';

export const LinkButton = (props) => {
    const theme = useTheme();

    return (
        <button
            className={props.className}
            style={{
                cursor: 'pointer',
                color: theme.palette.primary.main,
                backgroundColor: 'transparent',
                border: 'none'
            }}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};