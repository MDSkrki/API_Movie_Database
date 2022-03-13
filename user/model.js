import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/API_Movie_Database');
        console.log('Connection to mongodb successful');
    } catch (error) {
        console.log(error, 'Connection to mongodb failed');
    }
}

connection();

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    role: String
})


const User = mongoose.model('Users', UserSchema);
export default User;


