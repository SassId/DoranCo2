import express from "express";

const server = express();

server.get("/api/posts", (req, res)=> {
    console.log(req);
    res.end("Hello")
})



server.listen(3005, function () {
  console.log("Server on port 3005");
});
