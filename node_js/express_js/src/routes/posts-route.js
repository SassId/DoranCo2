import express from "express";

export const postsRouter = express.Router();

const post = [
  {
    id: "a",
    title: "title 1",
  },
  {
    id: "b",
    title: "title 2",
  },
];

postsRouter.get("/", (req, res) => {
  res.end("hello");
});

// * To have the request url like /api/posts/id instead of /api/posts?id=id
postsRouter.get("/post/:id", (req, res) => {
  const id = req.params.id;
  const article = posts.find((post) => post.id == id);
  return rep.json(article);
});

postsRouter.post("/", (req, res) => {
  const data = req.body;
  console.log(data);
});
