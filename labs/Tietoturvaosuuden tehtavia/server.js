var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const {isEmail} = require("validator");
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})
app.post(
    '/process_post', urlencodedParser,
    check('first_name').isLength({ min: 2 }).withMessage("vähintään kaksi merkkiä!"),
    check('last_name').isLength({ min: 2 }).withMessage("vähintään kaksi merkkiä!"),
    check('age').isNumeric().withMessage("vain numeroita"),
    check('email').isEmail().withMessage("pitää olla email-formaatissa!"),
    function (req,res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
    }
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        age:req.body.age,
        email:req.body.email
    };
    console.log(response);
    res.end(JSON.stringify(response));
    res.send('yo');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})



