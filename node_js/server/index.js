// * Create a server:

// ! the server code is not supposed to update by itself as you develop
// ! you have to manually stop the server (ctrl + C) and run it again
// ! we use nodemon instead of node to have it change as we code

// * ESM Modules:

import http from "http";
import url from "url";
import fs from "fs";
import querystring from "querystring";

// const server = http.createServer((req, res)=> {
//     console.log('request received');
//     console.log(req.method);
//     console.log(req.url);
//     if (req.url === "/posts") {
//         if (req.method === "GET") {
//             res.end("Showing articles")
//             return
//         }
//         if (req.method === "POST") {
//             res.end("Create a new post")
//             return
//         }
//     }
//     res.end("Hello you") //this is the response of the server
// });

// const server = http.createServer((req, res)=> {
//     // Changes the url parameter that is a string into an object
//     // "firsname=Roo&lastname=rogers" -> {firstname: 'roo', lastname: 'rogers'}
//     const myUrl = url.parse(req.url);
//     const dataUrl = querystring.parse(myUrl.query);
//     console.log(dataUrl);
//     res.end("end trans")
// })

const server = http.createServer((req, res) => {
  // Transforme la chaine de caractère URL en objet JS
  const monUrl = url.parse(req.url);

  if (monUrl.pathname === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data.toString());
      return;
    });
  }
  if (monUrl.pathname === "/contact") {
    fs.readFile("./public/contact.html", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data.toString());
      return;
    });
  }

  fs.readFile("./public/404.html", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.end(data.toString());
    return;
  });
});

server.listen(3001);
