import express from "express";
import bcrypt from "bcrypt";

import User from "../models/User.js"
import Post from "../models/Post.js"


const router = express.Router();

//UPDATE 
router.post("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body, },{new:true});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
      res.status(401).json("You can only update your account")  
    };
});
//DELETE 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user= await User.findById(req.params.id)
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User deleted successfully");
            } catch (error) {
                res.status(500).json(error);
            }
        } catch (error) {
            res.status(404).json("user not found");
        }

    } else {
      res.status(401).json("You can only update your account")  
    };
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...otherDetails } = user._doc;

        res.status(200).json(otherDetails);
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;