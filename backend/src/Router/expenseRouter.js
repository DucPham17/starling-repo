const express = require("express");
const router = express.Router();
const { getAllExpenses, addExpense } = require("../FirebaseHelpers/expenseHelper");

router.get('/getexpenses', async (req, res) => { 
    const userId = req.query.userId;
    const list = await getAllExpenses(userId);
    
    await res.send(list);
})

router.post('/addexpense', async (req, res) => {
    console.log(req.body);
    const {
        name,
        userId,
        amount,
        expenseType
    } = req.body;
    var date = Date.now();

    const expense = {
        userId,
        name,
        amount,
        expenseType,
        date
    };

    await addExpense(expense);
    
    const list = await getAllExpenses(userId);
    await res.send(list);
})

router.delete('/deleteexpense', async (req, res) => { 
    const date = req.query.date;
    const userId = req.query.userId;

    await deleteExpense(userId, date);
    const list = await getAllExpenses(userId);
    
    await res.send(list);
})

module.exports = router;