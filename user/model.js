import mongoose from "mongoose";
import connection from "../config/db.js";

connection();

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    role: String // roles should be either "admin" or "user", giving more or less permissions
})

const User = mongoose.model('Users', UserSchema);
export default User;


