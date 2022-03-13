import * as service from "./sevice.js";

export const getTest = (req,res) => {
    console.log(service.testResponse());
    res.send(service.testResponse());
}