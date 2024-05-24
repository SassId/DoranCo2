import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import FormPost from "../../components/containers/form-post/FormPost.jsx";
import { UserContext } from "../../App.jsx";

// Etape 11  : Page de profile

//     [v] Afficher les données de l'utilisateur (stockés dans le contexte) dans la page de profil.
//     [v] Afficher conditionnellement une image avatar de l'utilisateur suivant si la propriété avatarUrl existe ou non. (Afficher une image par défaut si l'utilisateur n'a pas d'url pour l'avatar)

export default function Profile() {
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

  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  if (!user) {
    return navigate("/connexion");
  }

  return (
    <div style={{ padding: "50px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // gap: "40px",
        }}
      >
        {!user.avatarUrl ? (
          <img
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
            }}
            src="/img/sbcf-default-avatar.webp"
            alt="default profile pic"
          />
        ) : (
          <img
            style={{ borderRadius: "50%", width: "200px", height: "200px" }}
            src={user.avatarUrl}
            alt="user profile pic"
          />
        )}
        <p style={{ fontSize: "20px" }}>{user.username}</p>
        <p>{user.email}</p>
        <Link
          to={"/edit-profile"}
          style={{
            textDecoration: "none",
            backgroundColor: "orange",
            border: "solid 1px gray",
            borderRadius: "10px",
            paddingInline: "10px",
            color: "black",
          }}
        >
          Edit Profile
        </Link>
        <FormPost></FormPost>
        <div>
          {displayedPost.map((post) => {
            return (
              <div>
                <p style={{ fontSize: "20px", color: "orange" }}>
                  {post.title}
                </p>
                <p style={{ fontFamily: "sans-serif", color: "royalblue" }}>
                  {post.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
