import React, { useState } from "react";

export default function UserForm() {
  const [firstname, setFirstame] = useState("");
  const [firstnameError, setFirstameError] = useState("");

  const [lastname, setLastname] = useState("");
  const [lasstnameError, setLastameError] = useState("");

  function changeFirstname(e) {
    setFirstameError("");
    setFirstame(e.target.value);
  }

  function changeLastname(e) {
    setLastameError("");
    setLastname(e.target.value);
  }

  async function submitForm() {
    if (firstname !== "" && lastname !== "") {
      alert(firstname + " " + lastname);
      return;
    }

    setFirstameError(firstname === "" ? "enter your firtname" : "");
    setLastameError(lastname === "" ? "enter your lastname" : "");
  }

  const isDisabled = firstname === "" || lastname === "";
  console.log(firstname, lastname);
  return (
    <div>
      <div>
        <input type="text" placeholder="Firstname" onChange={changeFirstname} />
        <p className="inputError">{firstnameError}</p>
        <input type="text" placeholder="Lastname" onChange={changeLastname} />
        <p className="inputError">{lasstnameError}</p>
        <button disabled={isDisabled} onClick={submitForm}>
          Add
        </button>
      </div>
    </div>
  );
}
