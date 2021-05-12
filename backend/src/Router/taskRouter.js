const express = require("express");
const { getAllTasks, addTask, toggleTask, updateTask, deleteTask, filterTodosByTags, filterTodosByDate } = require("../FirebaseHelpers/tasksHelper");
const router = express.Router();

router.get('/gettasks', async (req, res) => {
    const {date, userId} = req.query;

    const list = await getAllTasks(userId, date);

    await res.send(list);
})

router.post('/addtask', async (req, res) => {
    const newTask = {
        userId: req.body.userId,
        title: req.body.title,
        tag: req.body.tag,
        isCompleted : req.body.isCompleted,
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
        tag: req.body.tag,
        isCompleted : req.body.isCompleted,
        date: req.body.date,
    }

    await toggleTask(newTask);

    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

router.post('/updatetask', async (req, res) => {
    const updatedTask = {
        userId: req.body.userId,
        title: req.body.item.title,
        tag: req.body.item.tag,
        date: req.body.date,
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
        tag: req.query.tag,
        date: req.query.date
    }

    await deleteTask(newTask);
    const allTasks = await getAllTasks(req.query.userId, req.query.date);
    await res.send(allTasks);
})

router.get('/filterTodosByTag', async (req, res) => {
    const userId = req.query.userId;
    const tag = req.query.tag;
    const date = req.query.date;
    const status = req.query.status;

    const list = await filterTodosByTags(userId, tag, status, date);
    console.log(list)
    await res.send(list);
})

router.get('/filterTodosByDate', async (req, res) => {
    const userId = req.query.userId;
    const choice = req.query.choice;
    const recent = req.query.recent;

    const list = await filterTodosByDate(userId, choice, recent);
    await res.send(list);
})

module.exports = router;