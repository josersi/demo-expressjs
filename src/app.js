var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, World!\n');
});

app.get('/hello/:name', function (req, res) {
    res.send(`Hello, ${req.params.name}!\n`);
});
 

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

module.exports = app;