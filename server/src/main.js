const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const {requireAuth , ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node')

dotenv.config({ path: path.resolve(__dirname, './.env') });//Load enviorment variables from a .env file into process.env


const app = express();

mongoose.connect(`${process.env.MONGO_URI}`)
    .then(()=>console.log("mongo db connected"))
    .catch(e => console.log(e))

app.use(cors())
app.use(express.json())

const clerkMiddleware = ClerkExpressWithAuth({
    apiKey: `${process.env.CLERK_PUBLISHABLE_KEY}`,
    secretKey: `${process.env.CLERK_SECRET_KEY}`
})

app.use(clerkMiddleware)

const saveUserRoutes = require('./routes/saveUser')

app.use('/save-user', saveUserRoutes)

app.get('/',(req,res)=>{
    res.send("hi mi name is ifrah")
})


console.log('PORT:', process.env.PORT);


const PORT = process.env.PORT || 5001


app.listen(PORT ,()=> console.log(`server running on port ${PORT}`)) 