const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const database = require('../db/db.json');

const app = express();

//getting api/notes
app.get('/api/notes', (req, res) =>{
    fs.readFile('./db/db.json', (err,data) =>{ 
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
    database.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(database), (err) =>
        res.json(database));
    }) 
}
);

// app.delete('/api/notes/:id', (req, res) =>{
//     fs.readFile('./db/db.json', 'utf8', (err,data)=> {
//         if (err) throw err;
//         let id = req.params.id;
//         let note = JSON.parse(data);
//         const filter = note.filter(values => values.id !==id);
//     fs.writeFile(__dirname, './db/db.json', JSON.stringify(filter), err=> {
//         if (err) throw err;
//         console.log('note deleted');
//     });

//     })
// })

module.exports = app;