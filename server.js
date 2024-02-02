const http = require("http");
const express = require("express");
const app = express();

const serverHttp = http.createServer(app);
const io = require("socket.io")(serverHttp);

io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("new message", (message) => {
        io.emit("new message", message);
    });
});

app.use(express.static("public"));

serverHttp.listen(3000, "192.168.1.65", () => {
    console.log("Server is running on http://192.168.1.65:3000")
});
