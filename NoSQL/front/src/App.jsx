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

  return (
    <div>
      <h1>🔫Russian Roulette</h1>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
