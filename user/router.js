import express from "express";
const router = express.Router();

router.get('/', (req,res) => {
    console.log('Get request successful');
    res.send('Get response successful');
})

export default router;