import { convertToDisplayMoney } from "../../../Helpers/currency";

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
                <span>{props.currency}</span>
                <h1 style={textStyle}>{convertToDisplayMoney(props.amount)}</h1>
            </div>
        </div>
    );
}

Money.defaultProps = {
    currency: '$'
}