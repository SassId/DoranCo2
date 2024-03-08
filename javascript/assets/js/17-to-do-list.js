const submitButton = document.querySelector("#submit-input");
const myList = document.querySelector("#my-list");
// console.log(submitButton);
submitButton.addEventListener("click", (event) => {
  // console.log(submitButton.addEventListener);
  const textInput = document.querySelector("#text-input");
  const listElement = document.createElement("li");
  listElement.textContent = textInput.value;
  myList.append(listElement);
});

myList.addEventListener("click", (event) => {
  if (event.target.style.textDecoration == "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
});

myList.addEventListener("dblclick", (event) => {
  event.target.remove();
});
