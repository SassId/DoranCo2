import { useState, useEffect } from "react";

export default function TodoList() {
  const [userInput, setUserInput] = useState("");

  //   TODO:
  // Exercice:
  // 1. Créer une variable d'état: message: {success:boolean, message:string}
  // 2. L'afficher dans le JSX
  // 3. Quand l'utilisateur clique:
  // 3.1 Test: Si l'input est vide afficher le message "Message Obligtoire"
  // 3.2 Envoyer la requete, afficher un message de succés

  const [message, setMessage] = useState({ success: true, content: "" });
  const [todolist, setTodolist] = useState([]);

  function handleUserInput(e) {
    // const userText = e.target.value;
    // setUserInput(userText);
    // equals to
    setUserInput(e.target.value);
  }

  // sending the input as a request to the backend:
  async function handleSubmit() {
    // alert(userInput);
    if (userInput === "") {
      return setMessage({ success: false, content: "title is mandotory" });
    }

    // test if userInput is empty and display error message if so
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title: userInput }),
      // we precise that we send json to the database (backend)
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    todolist.push(data.todo);
    // we have to create a new reference for the new array to be acknowledged by react
    // ? Spread operator method:
    setTodolist([...todolist]);

    // ? New instance of the todolist array method:
    // const newTodolist = new Array(todolist)
    // setTodolist(newTodolist);
    return setMessage({ success: true, content: "task added" });
  }

  //   TODO:
  // Exercice:
  // Utiliser le useEffect et fetch pour récuperer les listes de tache
  // Stocker les liste de taches dans une variable d'état
  // Utiliser un boucle pour afficher chaque liste de taches

  useEffect(() => {
    console.log("test");
    async function getTodolist() {
      const todolist = await fetch("/api/todos");
      const data = await todolist.json();
      setTodolist(data.documents);
      console.log(data);
    }
    getTodolist();
  }, []);

  return (
    <div>
      <input type="text" placeholder="type here" onChange={handleUserInput} />
      <button onClick={handleSubmit}>submit</button>
      <p style={{ color: message.success ? "green" : "red" }}>
        {message.content}
      </p>
      <ul>
        {todolist.map((todo) => {
          return <li key={todo._id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}
