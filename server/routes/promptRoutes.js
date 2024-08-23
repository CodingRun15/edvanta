const express = require('express');
const { promptModel } = require('../Models/promptSchema');
const promptRouter = express.Router();

promptRouter.post('/create',async (req,res)=>{
const prompt = req.body;
 try{
    const newPrompt = new promptModel(prompt);
    await newPrompt.save();
    return res.status(200).json({promptAdded:newPrompt});
 }catch(err){
   return res.status(400).json({error:err});
 }
})