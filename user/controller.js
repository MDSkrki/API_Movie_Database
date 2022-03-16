import User from "./model.js";


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
        const user = await User.create(req.body);
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