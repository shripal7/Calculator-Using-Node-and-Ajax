var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Calculator' });
});


app.post("/adder", function(req, res) {
    var answer = {};
    answer.answer = parseFloat(req.body.n1) + parseFloat(req.body.n2);
    res.json(answer);
});
app.post("/subtract", function(req, res) {
    var answer = {};
    answer.answer = parseFloat(req.body.n1) - parseFloat(req.body.n2);
    res.json(answer);
});
app.post("/multiply", function(req, res) {
    var answer = {};
    answer.answer = parseFloat(req.body.n1) * parseFloat(req.body.n2);
    res.json(answer);
});
app.post("/divide", function(req, res) {
    var answer = {};
    answer.answer = parseFloat(req.body.n1) / parseFloat(req.body.n2);
    res.json(answer);
});

module.exports = app;
