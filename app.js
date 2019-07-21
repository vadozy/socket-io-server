const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const generate_prices = require('./util/mock/prices_generator');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const getPricesAndEmit = socket => {
  try {
    const res = JSON.stringify(generate_prices());
    socket.emit("prices-API", res);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

io.on("connection", socket => {
  console.log("New client connected")
  setInterval(() => getPricesAndEmit(socket),
    3000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
  
server.listen(port, () => console.log(`Listening on port ${port}`));
