import Movie from "./model.js";

export const getMovie = async (req, res) => {
    const movieToFind = {}
    if (req.query.id) movieToFind._id = req.query.id;
    if (req.query.title) movieToFind.title = req.query.title;
    if (req.query.director) movieToFind.director = req.query.director;
    if (req.query.year) movieToFind.year = req.query.year;
    res.json(await Movie.find(movieToFind));
}

export const createMovie = async (req, res) => {
    const movie =await Movie.create({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        director: req.body.director,
    });
    res.json(movie);
}

export const deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.json(movie);
}

export const updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.json(movie);
}
