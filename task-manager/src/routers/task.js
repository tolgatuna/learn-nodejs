const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.post("/tasks", async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).send(savedTask);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!!task) {
            return res.send(task);
        }
        res.status(404).send()
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/tasks/:id", async (req, res) => {
    try {
        const updateKeys = Object.keys(req.body);
        const allowedUpdateFields = ['description', 'completed'];
        const isValidOperation = updateKeys.every(it => allowedUpdateFields.includes(it));

        if (!isValidOperation) {
            return res.status(400).send({error: 'Invalid update keywords!'})
        }
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        updateKeys.forEach(key => task[key] = req.body[key]);
        task.save();
        return res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).send();
        }
        return res.send(deletedTask);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;