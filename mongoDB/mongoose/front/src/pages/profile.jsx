import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

export default function Profile() {
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
          gap: "40px",
        }}
      >
        {!user.avatarUrl ? (
          <img
            style={{ borderRadius: "50%" }}
            src="/img/sbcf-default-avatar.webp"
            alt="default profile pic"
          />
        ) : (
          <img
            style={{ borderRadius: "50%" }}
            src={user.avatarUrl}
            alt="user profile pic"
          />
        )}
        <p>
          Hello {user.username}, <br />
          Here are your info: <br />
          Username: {user.username} <br />
          Email: {user.email} <br />
        </p>
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
      </div>
    </div>
  );
}
