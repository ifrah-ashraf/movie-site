// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   clerkId:{
    type: String,
    required: true,
    unique: true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },

   createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
  }

});

const User = mongoose.model("User", userSchema);

console.log("user js is working")
module.exports = User;
