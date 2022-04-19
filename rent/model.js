import mongoose from "mongoose";

const RentSchema = new mongoose.Schema({
    idMovie: { type: Number },
    idUser: { type: String },
    dateRented: { type: String },
    isAvailable: { type: Boolean, default: true },
    price: { type: String },
});

const Rent = mongoose.model('Rents', RentSchema);
export default Rent;