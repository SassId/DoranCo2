import "./App.css";
import { useEffect } from "react";
import UsersList from "./components/UserForm";
import UserForm from "./components/UserForm";

function App() {
  useEffect(() => {
    async function getPong() {
      const response = await fetch("/api/ping");
      const data = await response.json();
      console.log(data);
    }
    getPong();
  }, []);

  async function addUser(firstname, lastname) {
    const user = { firstname, lastname };
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }

  return (
    <div>
      <h1>🔫Russian Roulette</h1>
      <UserForm onSubmit={addUser}></UserForm>
    </div>
  );
}

export default App;
