const express = require('express')
const app = express()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'localhost',
    user:'olso',
    password:'olso',
    database:'webkanta'
});

app.get('/', async (req, res) => {
    try {
        const result1 = await pool.query("select * from location");
        const result2 = await pool.query("select * from event");
        const result3 = await pool.query("select * from event_date");
        console.log(result1);
        res.send(JSON.stringify(result1) + '<br>' + '<br>' + JSON.stringify(result2) + '<br>' + '<br>' + JSON.stringify(result3));
    } catch (err) {
        throw err;
    }
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})