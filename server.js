const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const database = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(apiRoutes);
app.use(htmlRoutes);


// starts server
app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`);
});