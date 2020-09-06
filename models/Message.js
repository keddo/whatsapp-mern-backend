const mongoose = require('mongoose');
const schema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean
});

const model = mongoose.model('messages', schema);

module.exports = model;