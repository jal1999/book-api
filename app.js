const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRoutes = require('./routes/books');
const db = require('./util/database');
const Book = require('./models/book');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow requests to be sent from any client
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // allow certain methods
    res.setHeader('Access-Control-Allow-Headers', '*'); // allow all headers to be set by the client
    next();
});
app.use(bodyParser.json());
app.use(bookRoutes);

db
    .sync()
    .then(() => {
        app.listen(8080, () => {
            console.log('Listening on port 8080!');
        });
    });