import User from "./model.js";
import { tokenGenerator, hasher, passChecker } from "../shared/services/service.js";

export const getAllUsers = async (req, res) => {
    try {
        const user = {}
        if (req.query.id) user._id = req.query.id;
        if (req.query.username) user.username = req.query.username;
        if (req.query.email) user.email = req.query.email;
        if (req.query.role) user.role = req.query.role;
        res.status(200).json(await User.find(user));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: await hasher(req.body.password),
            email: req.body.email,
            role: 'user',
        });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const updateUserById = async (req, res) => {
    try {
        const update = req.body;
        const previousValue = await User.findByIdAndUpdate(req.params.id, update);
        res.json(previousValue);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });
        // passCorrect checks if password provided by user is the same as the hashed version stored in database
        const passCorrect = await passChecker(req.body.password, user.password);
        if (passCorrect) {
            const token = tokenGenerator({role: user.role, id: user.id, username: user.username}, process.env.JWT_SECRET);
            console.log(token);
            res.send({token})
        } else {
            res.status(401).send('User not found');
        }
    } catch (error) {
        console.log(error, 'Login failed');
        res.status(401).send(error, 'Login failed');
    }
}

export const adminCreator = async (req, res) => {
    try {
        const admin = await User.create({
            username: req.body.username,
            password: await hasher(req.body.password),
            email: req.body.email,
            role: 'admin',
        });
        res.json(admin);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}