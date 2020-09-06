const mongoose = require('mongoose');
// Mongodb connection
const connectionUrl = '';
const connection = mongoose.connect(connectionUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

