// * Create a server:

import http from "http";

const server = http.createServer((req, res)=> {
    console.log('request received');
    // console.log(req);
    res.end("Hello you") //this is the response of the server
}); 

server.listen(3001)

// ! the server code is not supposed to update by itself as you develop
// ! you have to manually stop the server (ctrl + C) and run it again
// ! we use nodemon to have it change as we code