import { useState } from "react";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleEmailInput(e) {
    setEmailError("");
    setEmail(e.target.value);

    if (email == "") {
      return setEmailError("please enter your email");
    }

    if (!email.includes("@")) {
      return setEmailError("please enter a valid email");
    }
  }

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handlePasswordInput(e) {
    setPasswordError("");
    setPassword(e.target.value);

    if (password.length < 6) {
      return setPasswordError("password must be at least 6 characters");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    const response = await fetch("/api/users/connextion", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Type-Content": "application/json" },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return setFormMessage("this email is already used");
      }
    }
  }

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="enter your email"
            value={email}
            onChange={handleEmailInput}
          />
          <p>{emailError}</p>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordInput}
          />
          <p>{passwordError}</p>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
