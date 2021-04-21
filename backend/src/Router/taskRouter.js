const express = require("express");
const router = express.Router();
require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

router.get('/gettasks', async (req, res) => {
    var userId = req.body.userId;
    console.log(userId)
    var list = [];
    const postRef = db.collection('tasks');
    const snapshot = await postRef.get();
    await snapshot.forEach(doc => {
        //console.log(doc.id);
        if (doc.data().userId === userId) {
            list.push(doc.data());
        }

    });
    await res.send(list);
})

router.post('/addtask', async (req, res) => {
    console.log(req.body);
    var userId = req.body.userId;
    var title = req.body.title;
    var description = req.body.description;
    var isCompleted = false;
    var date = Date.now();

    const temp = {
        userId: userId,
        title: title,
        description: description,
        isCompleted : isCompleted,
        date: date
    }

    await db.collection('tasks').add(temp);
    await res.send(temp);
})



module.exports = router;