import * as service from "./sevice.js";
import * as Model from "./model.js";

export const getTest = (req,res) => {
    console.log(service.testResponse());
    res.send(service.testResponse());
}

export const postTest = (req,res) => {
    console.log('Post successful');
    res.json(service.testPost(req.body));
}
