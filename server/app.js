'use strict';

var express = require('express');

var app = express();

app.use(express.static('client'));

app.listen(3000, () => {
  console.log('server listeningo on port 3000');
  console.log('goto: >> http://localhost:3000');
})