const jwt = require('jsonwebtoken');
const express = require('express');
const auth = (req,res,next) => {
   const token = req.headers['authorization'].split(' ')[1];
   console.log(token);
   if (!token) return res.status(401).json({ message: 'youre not authorized to be here'});
   jwt.verify(token, 'secret_edvanta', (err, payload) => {
      if (err) return res.status(403).json({ message: 'invalid token' });
       const {username} =   payload;
       console.log(username);
       const {actor} = req.body;
       actor.username = username;
      next();
   });
}
module.exports = {auth};