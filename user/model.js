import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
    } catch {
        console.log('Connection to mongodb Failed');
    }
}

connection();

const Schema = new mongoose.Schema({
    testKey: String
})

export const Model = mongoose.model('testCollection', Schema);


