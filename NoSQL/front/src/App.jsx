import "./App.css";
import { useEffect, useState } from "react";
import UsersList from "./components/UserForm";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
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
    const data = await response.json();
    setUsers([...users, data]);
  }

  return (
    <div>
      <h1>🔫Russian Roulette</h1>
      <UserForm onSubmit={addUser}></UserForm>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.firstname}</p>
          <p>{user.lastname}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
