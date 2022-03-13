import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('Connection to mongodb successful');
    } catch (error) {
        console.log(error, 'Connection to mongodb failed');
    }
}

connection();

const Schema = new mongoose.Schema({
    testKey: String
})

const Model = mongoose.model('testCollection', Schema);
export default Model;


