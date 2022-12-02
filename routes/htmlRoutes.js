const express = require('express');
const path = require('path');
// const fs = require('fs');
// const uniqid = require('uniqid');

const app = express();

//getting notes.html
app.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
//getting index.html 
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = app;