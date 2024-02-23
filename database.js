const {Client} = require('pg')

// is this the same as -- import { Client } from 'pg'

const client = new Client({
    host: "",
    user: "",
    port: ,
    password: "",
    database: ""
})

// client.connect();


// client.query(`SELECT * FROM todo`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// });

module.exports = client