const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Models/userSchema');

userRouter.post('/signin',async(req,res)=>{
   const {email,password}  =  req.body;
    const user = await UserModel.findOne({email: email, password: password});
    if(user){
       const token = jwt.sign({userID:user._id,username:user.username},'secret_edvanta',{expiresIn:'1h'});
        return res.status(200).json({success:'user successfully signed in',message:token});
    }else{
        return res.status(401).json({error:'Invalid credentials'});
    }
})


module.exports = {userRouter}