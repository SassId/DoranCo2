import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [displayedPost, setDisplayedPost] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const token = localStorage.getItem("access_token");

      const response = await fetch("/api/users/me/posts", {
        headers: { Authorization: "Bearer " + token },
      });

      const postData = await response.json();
      console.log(postData);
      setDisplayedPost(postData.documents);
    }
    console.log(displayedPost);
    getPosts();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "20px", textAlign: "center" }}>
        What's up, World ?!
      </h1>
      <div>
        {displayedPost.map((post) => {
          return (
            <div
              style={{
                border: "solid 1px gray",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
              }}
            >
              <p style={{ fontSize: "20px", color: "orange" }}>{post.title}</p>
              <p style={{ fontFamily: "sans-serif", color: "royalblue" }}>
                {post.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
