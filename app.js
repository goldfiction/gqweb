var express = require('express');

var path = './public/www';
var options = {};
var uri = '/';
var app = express();
var port = 3080;

app.use('/', express.static('public/www'))

app.listen(port, () => console.log(`Serving ${path} on localhost:${port}${uri}`));