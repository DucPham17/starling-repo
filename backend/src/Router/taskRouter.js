const express = require("express");
const { getAllTasks, addTask, toggleTask, updateTask, deleteTask } = require("../FirebaseHelpers/tasksHelper");
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
        // isCompleted : req.body.isCompleted,
        date: req.body.date

    }

    await addTask(newTask);

    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

router.post('/toggleTask', async (req, res) => {
    const newTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        isCompleted : req.body.isCompleted,
        date: req.body.date
    }

    await toggleTask(newTask);

    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

router.post('/updatetask', async (req, res) => {
    const updatedTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    }
    console.log(updatedTask);
    await updateTask(updatedTask);
    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

router.delete('/deleteTask', async (req, res) => {
    const newTask = {
        userId: req.query.userId,
        title: req.query.title,
        description: req.query.description,
        date: req.query.date
    }

    await deleteTask(newTask);
    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

module.exports = router;