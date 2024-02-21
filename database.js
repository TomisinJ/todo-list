const {Client} = require('pg')

// is this the same as -- import { Client } from 'pg'

const client = new Client({
    host: "localhost"
})