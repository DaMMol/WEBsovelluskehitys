const express = require('express')
const app = express()
const mariadb = require('mariadb');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const pool = mariadb.createPool({
    host:'localhost',
    user:'olso',
    password:'olso',
    database:'webkanta'
});

app.get('/', function(req,res){
    res.sendFile('Tehtava7.html', {root: __dirname});
});

app.post('/view', async (req, res) => {
    try {
        const result = await pool.query('SELECT event_date.Date, event.Name, event.Type, Location.Location_name FROM event_date, event, location WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id and event_date.Date >= ? and event_date.Date <= ? GROUP BY Name ORDER BY event_date.Date', [req.body.aloitusdate,req.body.lopetusdate]);
        console.log(result);
        let lista = "";
        for(let i = 0; i<result.length;i++) {
            lista += "<br><br><li> Aika: " + JSON.stringify(result[i].Date)
                + "<br> Nimi: " + JSON.stringify(result[i].Name)
                + "<br> Tyyppi: " + JSON.stringify(result[i].Type)
                + "<br> Paikka: " + JSON.stringify(result[i].Location_name)
                + "</li>";
        };
        res.send("<div><ol>" + lista + "</ol></div>");
    } catch (err) {
        throw err;
    }
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})