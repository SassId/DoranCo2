const submitButton = document.querySelector("#submit-button");
console.log(submitButton);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  console.log(nameInput.parentElement);
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  if (nameInput.value == "") {
    if (errorMessage1) {
      errorMessage1.remove;
    }
    const errorMessage1 = document.createElement("p");
    errorMessage1.textContent = "Please enter your name";
    errorMessage1.classList.add("error-message");
    errorMessage1.setAttribute("id", "PlsEnterName");

    nameInput.parentElement.append(errorMessage1);
  }
});
