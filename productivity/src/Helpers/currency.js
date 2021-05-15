const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export const convertToDisplayMoney = (amount) =>
    formatter.format(parseFloat(amount)).replace('$', '');