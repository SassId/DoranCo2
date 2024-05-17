import { useState, useEffect } from "react";
import TodoList from "./components/containers/todolist/TodoList";

// import "./App.css";

function App() {
  // test if connexion in done
  // useEffect(() => {
  //   async function getPing() {
  //     const response = await fetch("/api/ping");
  //     const data = await response.json();
  //     console.log(data);
  //   }

  //   getPing();
  // }, []);

  return (
    <div>
      <h1>Hello, World</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
