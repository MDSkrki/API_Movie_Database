import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
});

const Movie = mongoose.model('Movies', MovieSchema);
export default Movie;