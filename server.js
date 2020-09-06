const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({message: 'Hello'});
});

const port = process.env.PORT || 9000;

app.listen(port, ()=> {
    console.log(`Server listening on: ${port}`);
});
