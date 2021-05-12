import React from 'react';
import { useTheme } from '@material-ui/core';

export const CommonButton = (props) => {
    const theme = useTheme();

    return (
        <button
            style={{
                textAlign: 'center',
                backgroundColor: theme.palette.primary.main,
                padding: '1rem',
                borderRadius: '50rem',
                cursor: 'pointer',
                color: theme.palette.primary.contrastText,
                border: 'none',
            }}
            {...props}
        >
            {props.children}
        </button>
    );
};