const express = require("express");
const { updateTodo, deleteTodo } = require("../../../productivity/src/Action/todosAction");
const { getAllTasks, addTask, toggleTask, updateTask } = require("../FirebaseHelpers/tasksHelper");
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

router.post('/toggleTask', async (req, res) => {
    const newTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        isCompleted : true,
        date: req.body.date
    }

    await toggleTask(newTask);

    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

router.put(`/updatetask/${userId}`, async (req, res) => {
    const updatedTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        isCompleted : true,
        date: req.body.date
    }

    await updateTask(updatedTask);
})

router.delete('/deleteTask', async (req, res) => {
    const newTask = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        isCompleted : false,
        date: req.body.date
    }

    await deleteTask(newTask);
    const allTasks = await getAllTasks(req.body.userId, req.body.date);
    await res.send(allTasks);
})

module.exports = router;