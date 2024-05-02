import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titre from './components/ui-atoms/titre/titre'
import Player from './components/ui-atoms/player/player'
import Header from './components/containers-molecules/header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
    </>
  )
}

export default App
