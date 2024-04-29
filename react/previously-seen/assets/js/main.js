const burgerIcon = document.getElementById("burger-icon");

burgerIcon.addEventListener("click", () => {
  console.log("yo");
  const navList = document.getElementById("nav-list");
  console.log(navList);
  if (navList.style.left === "-100%") {
    navList.style.left = "0";
  } else {
    navList.style.left = "-100%";
  }
});

// *To do list:

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  // console.log('yo');
  const taskField = document.getElementById("task-field");
  const errorMessage = document.getElementById("error");
  if (taskField.value == "") {
    if (errorMessage) {
      return;
    }
    const emptyFiedError = document.createElement("p");
    emptyFiedError.textContent = "please write a task";
    emptyFiedError.style.color = "red";
    emptyFiedError.id = "error";
    document.querySelector("#error-message").append(emptyFiedError);
  } else {
    const items = document.createElement("div");
    items.id = "items";
    items.classList.add("");

    const newTask = document.createElement("p");
    newTask.textContent = taskField.value;

    const date = new Date();
    const deleteButton = document.createElement("input");
    deleteButton.type = "submit";
    deleteButton.value = "delete";
    deleteButton.addEventListener("click", () => {
      items.remove();
    });

    const doneButton = document.createElement("input");
    doneButton.type = "submit";
    doneButton.value = "done";
    doneButton.addEventListener("click", () => {
      doneButton.remove();
    });

    const itemsDiv = document.getElementById("items");
    items.append(newTask, date.toLocaleDateString(), deleteButton, doneButton);

    const tasks = document.getElementById("tasks");
    tasks.append(items);
  }
});
