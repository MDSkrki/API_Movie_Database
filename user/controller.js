import * as service from "./service.js";
import Model from "./model.js";

export const getTest = async (req,res) => {
    const items = await Model.find({});
    res.json(service.testResponse(items));
}

export const postTest = async (req,res) => {
    const testData = new Model(req.body);
    await service.testPost(testData);
    res.json(testData);
}

export const deleteTest = async (req, res) => {
    const itemToDelete = service.testDelete(req.params.id);
    await Model.deleteOne(itemToDelete);
    res.json(itemToDelete);
}

export const patchTestByTestKey = async (req, res) => {
    const previousValue = await Model.findOneAndUpdate({testKey: req.params.testKey}, {testKey: "This is another replaced value"});
    res.json(previousValue);
}