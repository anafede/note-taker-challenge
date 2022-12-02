const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');

const app = express();

//getting api/notes
app.get('/api/notes', (req, res) =>{
    fs.readFile('./db/db.json', (err, data) =>{ 
        if (err) throw err;
        let note = JSON.parse(data);
        console.log(note);
            res.json(note);
    })
});

app.post('/api/notes',  (req,res) => {
    fs.readFile('./db/db.json', (err)=> {
        if (err) throw err;
        let newNote = {
            id: uniqid(),
            text: req.body.text,
            title: req.body.title
        };
        // let notes = JSON.parse(newNote);

    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
        res.json(newNote));
    }) 
}
);

module.exports = app;