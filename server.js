const express = require('express');
const morgan = require('morgan');

// Database connection
require('./dbConnection');
// routes
const messageRoutes = require('./routes/MessageRoutes');
const app = express();

// middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/v1', messageRoutes);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server listening on: ${port}`);
});
