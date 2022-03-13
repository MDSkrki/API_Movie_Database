import User from "./model.js";

export const getTest = async (req, res) => {
    const items = await Model.find({});
    res.json();
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