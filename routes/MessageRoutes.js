const mongoose = require('mongoose');
const express = require('express');
const messages = require('../models/Message');

const router = express.Router();

router.get('/messages', (req, res) => {
   res.status(200).send({message: 'Hello!'});
});

router.post('/messages', (req, res) => {
  const message = req.body;
  messages.create(message, (err, data) => {
     if(err){
         res.status(500).send(err);
     }else {
         res.status(201).send(data);
     }
  });
});
module.exports = router;