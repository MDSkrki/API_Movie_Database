import Rent from "./model.js";

export const getRent = async (req, res) => {
    const query = {};
    if (req.query.idUser) query.idUser = req.query.idUser;

    try {
        const rented = await Rent.find(query);
        res.json(rented);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

export const createRent = async (req, res) => {
    const rentToCreate = {
        idUser: req.body.idUser,
        idMovie: req.body.idMovie,
        dateRented: req.body.dateRented,
        price: req.body.price,
    }
    try {
        const rent = await Rent.create(rentToCreate);
        res.json(rent);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}