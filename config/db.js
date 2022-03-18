import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin@cluster0.2y9ji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('Connection to mongodb successful');
    } catch (error) {
        console.log(error, 'Connection to mongodb failed');
    }
}

export default connection;