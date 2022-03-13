import * as service from "./sevice.js";
import Model from "./model.js";

export const getTest = (req,res) => {
    console.log(service.testResponse());
    res.send(service.testResponse());
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