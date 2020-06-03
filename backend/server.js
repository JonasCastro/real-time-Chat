const express = require("express");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);



let messages = [];
let users = [];

io.on("connection", (socket) => {
  socket.on("newConnection", (data) => {

    var user = users.map(function (e) { return e.id; }).indexOf(data.id);
    if (user == -1) {
      users.push(data);
    }
    socket.broadcast.emit("newParticipant", users);

  });
  socket.emit("newParticipant", users);
  socket.emit("newMessages", messages);


  socket.on("sendMessage", (data) => {
    messages.push(data);
    socket.broadcast.emit("newMessages", messages);
  });

  socket.on("disconnect", (data) => {
    users = users.filter(function (elem) {
      return elem.id !== data.id;
    });
    socket.broadcast.emit("newParticipant", users);
  });
});

server.listen(3333);
