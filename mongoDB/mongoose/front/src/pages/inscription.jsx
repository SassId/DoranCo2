import { useState } from "react";

// When an input is linked to a state variable by the input's value, it's calle a controlled field (and thus a controlled form)
export default function Inscription() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleUserEmail(e) {
    setEmailError("");
    const email = e.target.value;
    setEmail(email);

    if (email == "") {
      return setEmailError("email is mandatory");
    }
    // check if email contains '@
    if (!email.includes("@")) return setEmailError("enter a valid email");
  }

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  function handleUsername(e) {
    // cleans the error message everytime the user reenters an input
    setUsernameError("");
    setUsername(e.target.value);

    if (e.target.value == "") {
      return setUsernameError("username is mandatory");
    }
  }

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleUserPassword(e) {
    setPasswordError("");
    setPassword(e.target.value);

    if (e.target.value.length < 6) {
      return setPasswordError("password must be at least 6 characters long");
    }
  }

  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  function handleUserConfirm(e) {
    setConfirmError("");
    setConfirm(e.target.value);
    if (e.target.value != password) {
      return setConfirmError("the 2 passwords don't match");
    }
  }

  //   Display a message for successful or failed signin after submit
  const [formMessage, setFormMessage] = useState({
    success: false,
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (username == "" || !email.includes("@") || password.length < 6) {
      return;
    }

    // send the request to the backend: /api/inscription -> email, username, password
    const user = {
      email: email,
      username: username,
      password: password,
    };

    const response = await fetch("/api/users/inscription", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      console.log(response);
      return setFormMessage({
        success: false,
        message: "an error has occured, please try again later",
      });
    }
  }

  return (
    <div className="form-div">
      <form action="">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="enter your email"
            onChange={handleUserEmail}
            value={email}
          />
          <p>{emailError}</p>
        </div>
        <div>
          <label htmlFor="Username">Username: </label>
          <input
            type="text"
            placeholder="enter your username"
            onChange={handleUsername}
          />
          <p>{usernameError}</p>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="create your password"
            onChange={handleUserPassword}
          />
          <p>{passwordError}</p>
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password: </label>
          <input
            type="password"
            placeholder="confirm your password"
            onChange={handleUserConfirm}
          />
          <p>{confirmError}</p>
        </div>
        <button
          style={{
            padding: "5px",
            backgroundColor: "orange",
            borderRadius: "5px",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <p style={{ color: formMessage.success ? "green" : "red" }}>
          {formMessage.message}
        </p>
      </form>
    </div>
  );
}

// TODO:
// Créer un formulaire avec:
// input pour email - Erreur: Email incorrect !
// input pour username - Minimum 1 caractères: Erreur: Username obligatoire !
// input pour password - Minimum 6 caractères: Erreur: Mot de passe trop court !
// input pour confirmer password - égale a password: Erreur: Les Mots de passe sont différent !
// bouton pour valider le formulaire
