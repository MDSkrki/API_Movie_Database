import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.LOCAL_DB);
        console.log('Connection to mongodb successful');
    } catch (error) {
        console.log(error, 'Connection to mongodb failed');
    }
}

export default connection;