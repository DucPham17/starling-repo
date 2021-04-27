const express = require("express");
const router = express.Router();
const { getAllExpenses, addExpense, deleteExpense, updateExpense, filterExpenses} = require("../FirebaseHelpers/expenseHelper");

router.get('/getexpenses', async (req, res) => { 
    const userId = req.query.userId;
    const list = await getAllExpenses(userId);
    
    await res.send(list);
})

router.post('/addexpense', async (req, res) => {
    const {
        name,
        userId,
        amount,
        expenseType,
        date
    } = req.body;

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

router.post('/updateexpense', async (req, res) => {
    const {
        userId,
        date
    } = req.body;
    const name = req.body.item.name;
    const amount = req.body.item.amount;
    const expenseType = req.body.item.expenseType;

    const expense = {
        userId,
        name,
        amount,
        expenseType,
        date
    };

    console.log(expense)

    await updateExpense(expense);
    
    const list = await getAllExpenses(userId);
    await res.send(list);
})

router.get('/filterexpenses', async (req, res) => { 
    const userId = req.query.userId;
    const choiceDate = req.query.choiceDate;
    const choiceType = req.query.choiceType;
    const list = await filterExpenses(userId, choiceDate, choiceType);
    
    await res.send(list);
})

module.exports = router;