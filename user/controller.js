import User from "./model.js";

export const getUser = async (req, res) => {
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

export const patchTestByTestKey = async (req, res) => {
    const filter = { testKey: req.params.testKey };
    const update = req.body;
    const previousValue = await Model.findOneAndUpdate(filter, update);
    res.json(previousValue);
}