import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    userName: String,
    password: {type: String, required: true},
    email: {type: String, required: true, validate: validator.isEmail}, // should be an email in the database
    role: String // roles should be either "admin" or "user", giving more or less permissions
})

const User = mongoose.model('Users', UserSchema);
export default User;


