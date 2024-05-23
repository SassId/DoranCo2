import { useState, useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatarUrlError, setAvatarUrlError] = useState("");

  const [formMessage, setFormMessage] = useState({
    success: false,
    message: "",
  });

  function handleUsername(e) {
    setUsernameError("");
    setUsername(e.target.value);

    if (e.target.value == "") {
      return setUsernameError("username is mandatory");
    }
  }

  function handleAvatarUrl(e) {
    setAvatarUrlError("");
    setAvatarUrl(e.target.value);

    if (e.target.value == "") {
      return setAvatarUrlError("please choose an avatar");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (username == "") {
      return;
    }

    const profileEdit = {
      username: username,
      avatarUrl: avatarUrl,
    };
    console.log(username);
    const token = localStorage.getItem("access_token");
    const response = await fetch("api/users/me", {
      method: "PUT",
      body: JSON.stringify(profileEdit),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      if (response.status === 401) {
        return setFormMessage("this username is already taken");
      }
      return setFormMessage({
        success: false,
        message: "an error has occured, please try again later",
      });
    }
    const data = await response.json();
    setUser(data.user);
    console.log(data.user);
    // navigate("/profile");
    return setFormMessage({
      success: true,
      message: "your changes have been saved",
    });
  }

  return (
    <form>
      <div>
        <label htmlFor="newUsername">New Username: </label>
        <input
          type="text"
          id="newUsername"
          placeholder="enter your new username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="newAvatar">New Avatar: </label>
        <input
          type="text"
          id="newAvatar"
          placeholder="enter your avatar url"
          value={avatarUrl}
          onChange={handleAvatarUrl}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Change
      </button>
    </form>
  );
}
