const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/userSchema');

userRouter.post('/signin',async(req,res)=>{
   const {email,password}  =  req.body;
    const user = await UserModel.findOne({email});
    if(user && user.password===password){
       const token = jwt.sign({userID:user._id,username:user.username},'secret_edvanta',{expiresIn:'1h'});
        return res.status(200).json({success:'user successfully signed in',message:token,username:user.username});
     }else{
        return res.status(401).json({'message':'Invalid credentials'});
    }
})


module.exports = {userRouter}