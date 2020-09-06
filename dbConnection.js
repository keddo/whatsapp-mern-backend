const mongoose = require('mongoose');
// Mongodb connection
const connectionUrl = 'mongodb+srv://admin:Kedro@9314@cluster0.gcfib.mongodb.net/messages?retryWrites=true&w=majority';
const connection = mongoose.connect(connectionUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

