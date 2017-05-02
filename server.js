/**
* Created by david on 5/2/17.
*/
var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
var useragent = require('express-useragent');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/headerParser/api/whoami';

app.get(api, function (req, res) {
    var lang =  req.acceptsLanguages();
    var software = req.useragent.os;
    var ipaddress = req.ip;
    res.json({"ipaddress": ipaddress, "language": lang[0], "software": software })
});





if (PORT === 3000) {
    app.get('/headerParser/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });
}


app.listen(PORT, function () {
console.log('Listening on port 3000!')
});