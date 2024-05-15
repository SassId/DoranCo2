import express from "express"

const PORT = 3005;

const server = express()

server.listen(PORT, function() {
    console.log("server listening on port 3005")
});



