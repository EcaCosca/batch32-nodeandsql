const express = require("express");
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
 user: 'ecacoscarelli',
 host: 'localhost',
 database: 'ecacoscarelli',
 password: '142536',
 port: 5433,
});

app.get("/", (req, res) => {
  pool // We're using the instance connected to the DB
    .query('SELECT * FROM recipes;')
    .then(data => res.json(data.rows)) // We can send the data as a JSON
    .catch(e => res.sendStatus(500)); // In case of problem we send an HTTP code
});

app.listen('3000', () => console.log('connected'));