const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim : true,
  },
  address: [{
    type : String,
  }],
  gender :{
    type : Number,
  },
  birthday : {
    type : Date,
  },
  email: {
    type: String,
    required : true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  }
   
})


const User = mongoose.model('User', userSchema, 'users')
module.exports = User;
