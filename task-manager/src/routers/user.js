const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token})
    } catch (e) {
        res.status(400).send({error: e.message});
    }
});

// router.get("/users", async (req, res) => {
//     try {
//         const users = await User.find();
//         res.status(200).send(users);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// });

router.get("/users/me", auth, async (req, res) => {
    res.send(req.user);
});

router.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!!user) {
            return res.send(user);
        }
        res.status(404).send()
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/users/:id", async (req, res) => {
    try {
        const updateKeys = Object.keys(req.body);
        const allowedUpdateFields = ['name', 'email', 'password', 'age'];
        const isValidOperation = updateKeys.every(it => allowedUpdateFields.includes(it));

        if (!isValidOperation) {
            return res.status(400).send({error: 'Invalid update keywords!'})
        }
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        updateKeys.forEach(key => user[key] = req.body[key]);
        await user.save();
        return res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send();
        }
        res.send(deletedUser);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;