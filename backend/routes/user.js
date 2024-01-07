import { Router } from "express";
import User from "../models/user.js";

const router = Router();

router.post('/user', async(req, res) => {    
    try {
        const { username, email, password } = req.body; 
        const userFound = await User.findOne({email: email});

        if (userFound) {
            return res.status(400).send("User already exists")
        } 

        const user = new User({username, email, password});
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);        
    }
});

router.get('/user/:email', async(req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOne({email: email});
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

router.delete('/user/:email', async(req, res) => {
    try {
        const email = req.params.email;
        const user = await User.findOneAndDelete({email});

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error); 
    }
});

export default router;