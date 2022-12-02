const express = require('express');
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const data = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//getting notes.html
    app.get('/notes', (req,res) =>{
        res.sendFile(path.join(__dirname, './public/notes.html'));
    });
//getting index.html 
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, './public/index.html'));
    })

//getting api/notes
    app.get('/api/notes', (req, res) =>{
        fs.readFile('./db/db.json', (err, data) =>{ 
            if (err) throw err;
            let note = JSON.parse(data);
                res.json(note);
        })
    });

app.post('/api/notes', function (req,res) {
        let newNote = {
            id: uniqid(),
            text: req.body.text,
            title: req.body.title
        };
        let notes = JSON.parse(data);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), (err) =>
    err ? console.log(err) : console.log("Your note has been saved!") );
    data.push(req.body);
    res.json(data);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log("Your note has been saved!"));
}
);



// starts server
app.listen(PORT, () =>{
    console.log(`Listening at http://localhost:${PORT}`);
});