import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Titre from "./components/ui-atoms/titre/titre";
import Player from "./components/ui-atoms/player/player";
import Header from "./components/containers-molecules/header/header";
import User from "./components/containers-molecules/user/User";
import Routine from "./components/containers-molecules/routine/Routine";
import Counter from "./components/containers-molecules/counter/counter";
import DisplayName from "./components/containers-molecules/displayName/displayName";
import Menu from "./components/containers-molecules/menu/Menu";

function App() {
  return (
    <>
      <div className="reactDiv">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Titre>React Class</Titre>
      <Player></Player>
      <Header></Header>
      <User></User>
      <Routine onclick></Routine>
      <Counter></Counter>
      <DisplayName></DisplayName>
      <Menu titre="Menu Déroulant">
        <h3>test</h3>
      </Menu>
    </>
  );
}

export default App;
