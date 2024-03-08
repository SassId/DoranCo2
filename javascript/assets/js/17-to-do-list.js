const submitButton = document.querySelector("#submit-input");
const myList = document.querySelector("#my-list");
const textInput = document.querySelector("#text-input");

submitButton.addEventListener("click", (event) => {
  // console.log(submitButton.addEventListener);
  const listItem = document.createElement("li");
  if (textInput.value != '') {
      listItem.textContent = textInput.value;
      myList.append(listItem);
  }
  textInput.value = '';
  textInput.focus() //* this method puts the focus on the targeted element
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

// const resetInput = document.querySelector('#reset-input');
// resetInput.addEventListener("click", (event) => {
//     textInput.value = '';
// })
