import mongoose from "mongoose";

const RentSchema = new mongoose.Schema({
    idMovie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateRented: { type: Date },
    isReturned: { type: Boolean },
    price: {type: Number},
});

const Rent = mongoose.model('Rents', RentSchema);
export default Rent;