export const getEarningAndSpendingAmount = (expenses) =>
    expenses.reduce((expenseObject, currentExpense) => {
        if (currentExpense.expenseType === 'Earning') {
            expenseObject.earning += parseFloat(currentExpense.amount)
        } else {
            expenseObject.spending += parseFloat(currentExpense.amount)
        }

        return expenseObject;
    }, {
        earning: 0,
        spending: 0
    });