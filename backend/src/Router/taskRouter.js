const express = require("express");
const { getAllTasks, addTask } = require("../FirebaseHelpers/tasksHelper");
const router = express.Router();

router.get('/gettasks', async (req, res) => {
    const {date, userId} = req.query;

    const list = await getAllTasks(userId, date);

    await res.send(list);
})

router.post('/addtask', async (req, res) => {

    console.log(req);
    const newTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        isCompleted : false,
        date: req.body.date

    }

    await addTask(newTask);

    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

module.exports = router;