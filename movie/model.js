import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title: String,
    releaseDate: String,
    img: String,
});

const Movie = mongoose.model('Movies', MovieSchema);
export default Movie;