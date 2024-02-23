// creating a server listening at port 3300
// the a client is connected to the server

const client = require('./database.js');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log("server is now listenng at port 3000")
})

client.connect();

app.use(bodyParser.json());

app.get('/tasks', (req,res) => {
    client.query(`SELECT * FROM todo`, (err, result) => {
        if(!err) {
            res.send(result.rows);
            console.log(result.rows);
        }
    });
    client.end;
});
