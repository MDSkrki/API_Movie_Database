import seed from "../config/MOCK_DATA.js";
import Movie from "./model.js";

export const getMovie = async (req, res) => {
    try {
        const movieToFind = {};
        if (req.query.id) movieToFind._id = req.query.id;
        if (req.query.title) movieToFind.title = req.query.title;
        if (req.query.director) movieToFind.director = req.query.director;
        if (req.query.year) movieToFind.year = req.query.year;
        res.json(await Movie.find(movieToFind));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create({
            title: req.body.title,
            year: req.body.year,
            genre: req.body.genre,
            director: req.body.director,
        });
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.json(movie);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
}

export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const seeder = async (req, res) => {
    try {
        await Movie.create(seed);
        res.json('Database successfully filled with many fake movies');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}