import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User.js"


const router = express.Router();

//REGISTER 
router.post("/register", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN
router.post("/login", async (req, res) => { 
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json("Wrong credentials 1");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong credentials");

        const { password, ...otherDetails } = user._doc;

        res.status(200).json(otherDetails);
    } catch (error) {
    //    res.status(500).json(error);
    }
});

export default router;