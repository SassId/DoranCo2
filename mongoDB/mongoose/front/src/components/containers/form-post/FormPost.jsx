import { useState } from "react";
import classes from "./FormPost.module.css";

// Dans le front:

//     [ ] Créer un formulaire avec messages d'erreurs. (title: obligatoire, description: obligatoire)
//     [ ] Envoyer une requête avec les données et le token lors de la soumission du formulaire

export default function FormPost() {
  const [postTitle, setPostTitle] = useState("");
  const [postTitleError, setPostTitleError] = useState("");

  function handleTitle(e) {
    setPostTitleError("");
    setPostTitle(e.target.value);

    if (e.target.value == "") {
      return setPostTitleError("you need to give a title to your post");
    }
  }

  const [postDescription, setPostDescription] = useState("");
  const [postDescriptionError, setPostDescriptionError] = useState("");

  function handleDescription(e) {
    setPostDescriptionError("");
    setPostDescription(e.target.value);

    if (e.target.value == "") {
      return setPostTitle("you need to say something");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!postTitle || !postDescription) {
      return;
    }

    const userPost = {
      title: postTitle,
      description: postDescription,
    };

    const token = localStorage.getItem("access_token");

    const response = await fetch("/api/users/me/posts", {
      method: "POST",
      body: JSON.stringify(userPost),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <form className={classes.postForm}>
      <input
        type="text"
        placeholder="what is the subject of your post?"
        required
        onChange={handleTitle}
      />
      <p>{postTitleError}</p>
      <textarea
        name=""
        id=""
        placeholder="tell us what's on your mind?"
        maxLength={255}
        required
        onChange={handleDescription}
      ></textarea>
      <p>{postDescriptionError}</p>
      <button type="submit" onClick={handleSubmit}>
        Post
      </button>
    </form>
  );
}
