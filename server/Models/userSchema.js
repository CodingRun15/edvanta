const mongoose = require('mongoose');
const UserModel = mongoose.model('User',{
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})
module.exports = {UserModel};