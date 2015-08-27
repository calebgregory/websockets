'use strict';

var express = require('express');
var socketio = require('socket.io');

var app = express();

app.use(express.static('client'));

var server = app.listen(3000, () => {
  console.log('server listeningo on port 3000');
  console.log('goto: >> http://localhost:3000');
})

var io = socketio(server);

io.on('connection', socket => {
  console.log('client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('client disconnected:', socket.id);
  })
});
