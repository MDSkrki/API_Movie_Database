import express from "express";
import authenticator from "../shared/middlewares/middleware.js";
import Rent from "./model.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const rented = await Rent.find({})
        res.json(rented);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})

export default router;