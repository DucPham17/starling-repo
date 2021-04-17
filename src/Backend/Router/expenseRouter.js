const express = require("express");
const router = express.Router();
require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/getexpenses', async (req, res) => {

    const userId = req.body.userId;
    var list = [];
    const postRef = db.collection('expenses');
    const snapshot = await postRef.get();
    await snapshot.forEach(doc => {
        //console.log(doc.id);
        if (doc.data().userId === userId) {
            list.push(doc.data());
        }

    });
    await res.send(list);
})

router.post('/addexpense', async (req, res) => {
    console.log(req.body);
    var userId = req.body.userId;
    var amount = req.body.amount;
    var expenseType = req.body.expenseType;
    var date = Date.now();

    const temp = {
        userId: userId,
        amount: amount,
        expenseType: expenseType,
        date: date
    }

    await db.collection('expenses').add(temp);
    await res.send(temp);
})



module.exports = router;