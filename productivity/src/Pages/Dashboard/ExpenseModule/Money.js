const variantStyles = {
    positive: {
        color: '#28a745'
    },
    negative: {
        color: '#dc3545'
    }
};

export const Money = (props) => {
    const textStyle = variantStyles[props.variant] || {};

    return (
        <div className="d-flex flex-column align-items-end">
            <div>{props.label}</div>
            <div className="d-flex">
                <h1 style={textStyle}>{parseFloat(props.amount).toFixed(2)}</h1>
                <span>{props.currency}</span>
            </div>
        </div>
    );
}

Money.defaultProps = {
    currency: '$'
}