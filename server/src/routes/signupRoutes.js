const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/',async (req, res)=>{ 
    const {username , userEmail , userPw} = req.body;

    try {
        const newUser = new User ({username , userEmail , userPw})

        await newUser.save()

        console.log("user is signing up ")
        res.status(201).json({message: "user signed up successfully"})
    }
    catch (error) {
        // Respond with an error message if something goes wrong
        res.status(500).json({ message: 'Error signing up user', error });
    }


})

module.exports = router;