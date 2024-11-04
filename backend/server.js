const express = require('express');
const { Pool } = require('pg'); // PostgreSQL client
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // cross origin requests
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    process: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Tester database connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to database!')
    }
});

// endpoint to get data
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todo');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})