var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mariadb = require("mariadb");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const pool = mariadb.createPool({
    host:'localhost',
    user:'olso',
    password:'olso',
    database:'webkanta'
});

app.get('/', function (req, res) {
    res.sendFile('Tehtava8.html', {root: __dirname});
})

app.get('/location', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM location WHERE Location.Location_name = ?', [req.query.name]);
        console.log(result);
        res.end(JSON.stringify(result));
    } catch (err) {
        throw err;
    }
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})