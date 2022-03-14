import User from "./model.js";
//TODO: catch errors

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
}

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
}

export const deleteUserById = async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.json(user);
}

export const updateUserById = async (req, res) => {
    const update = req.body;
    const previousValue = await User.findByIdAndUpdate(req.params.id, update)
    res.json(previousValue);
}