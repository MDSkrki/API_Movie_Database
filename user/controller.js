import User from "./model.js";
import * as service from './service.js'


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create({
            userName : req.body.userName,
            password : await service.hasher(req.body.password),
            email : req.body.email,
            role : 'user',
        });
        const token = service.tokenGenerator(user.role);
        console.log(token);
        //created user using only fields i want, including forced role and hashed password.
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
        res.send(erorr);
    }
}