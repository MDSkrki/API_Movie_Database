import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, validate: validator.isEmail }, // should be an email in the database
    role: {type: String, enum: ['admin', 'user']},
})

const User = mongoose.model('Users', UserSchema);
export default User;