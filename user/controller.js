import User from "./model.js";

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

export const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
}

export const deleteTest = async (req, res) => {
    await Model.deleteOne(itemToDelete);
    res.json(itemToDelete);
}

export const patchTestByTestKey = async (req, res) => {
    const previousValue = await Model.findOneAndUpdate({ testKey: req.params.testKey }, { testKey: "This is another replaced value" });
    res.json(previousValue);
}