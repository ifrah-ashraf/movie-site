const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
    const { clerkId, email } = req.body

    try {
        let user = await User.findOne({ clerkId });
        if (!user) {
         user = new User({ clerkId, email })
        }
        else {
            user.lastLogin = new Date();
        }

        await user.save()

        res.status(201).json({message : 'User data saved successfully'})
    }catch(e){
        res.status(500).json({ message: 'Error signing up user', error });
    } 
})

module.exports = router;