import React from 'react';
import { useTheme } from '@material-ui/core';

export const CommonButton = (props) => {
    const theme = useTheme();

    const {
        style,
        variant,
        ...restProps
    } = props;

    return (
        <button
            style={{
                textAlign: 'center',
                backgroundColor: theme.palette.[variant].main,
                padding: '0.5rem 1rem',
                borderRadius: '50rem',
                cursor: props.disabled ? 'not-allowed' : 'pointer',
                color: theme.palette.[variant].contrastText,
                border: 'none',
                ...style
            }}
            {...restProps}
        >
            {props.children}
        </button>
    );
};

CommonButton.defaultProps = {
    variant: 'primary'
};