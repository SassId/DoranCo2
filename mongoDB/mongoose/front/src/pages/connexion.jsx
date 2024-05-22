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

    if (e.target.value.length < 6) {
      return setPasswordError("password must be at least 6 characters");
    }
  }

  //   Display a message for successful or failed signin after submit
  const [formMessage, setFormMessage] = useState({
    success: false,
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    const response = await fetch("/api/users/connexion", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      if (response.status === 401) {
        return setFormMessage({
          success: false,
          message: "incorrect credentials",
        });
      }
    }

    return setFormMessage({ success: true, message: "successful connexion" });
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
        <p style={{ color: formMessage.success ? "green" : "red" }}>
          {formMessage.message}
        </p>
      </form>
    </div>
  );
}
