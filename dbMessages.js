const mongoose = require('mongoose');
const schema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
});

const model = mongoose.model('messages', schema);

module.exports = model;