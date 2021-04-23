import React from 'react';
import { useTheme } from '@material-ui/core';

export const LinkButton = (props) => {
    const theme = useTheme();

    return (
        <div
            className={props.className}
            style={{
                cursor: 'pointer',
                color: theme.palette.primary.main
            }}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};