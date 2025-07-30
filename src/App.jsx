import React, { useState } from 'react'
import styled from'styled-components';
import StartGame from "./components/StartGame"
import GamePlay from './components/GamePlay';



const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlayButton = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted? <GamePlay></GamePlay>: <StartGame toggle={()=>setIsGameStarted(true)}></StartGame> }
    </>
  )
}

export default App