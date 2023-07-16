require('dotenv').config();
const Task = require('./taskModel');
const User = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createAdmin = async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword) {
        res.status(400).json({ message: 'Password does not match' });
        return;
    }

    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({ username, passwordHash });

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

        user.token = token;
        await user.save();
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ err });
    }
};

const createTask = (req, res) => {
    const { toDo, donation } = req.body;
    Task.create({ toDo, donation })
        .then((task) => {
            res.status(200).json({ task });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getAllTask = (req, res) => {
    Task.find()
        .then((tasks) => {
            res.status(200).json({ tasks });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
}; 

const clearCookie = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Cookie cleared' });
};

module.exports = { createAdmin, createTask, getAllTask , clearCookie};
