import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import styled from 'styled-components'
import { useState } from 'react'


const GamePlay = () => {
    const [score,setScore] = useState(0);
    const[selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError]=useState();



    const randomNumber = (min,max) => {
        
        return Math.floor(Math.random() * (max- min) + min);

    }

    const rollDice = () => {
        const random = randomNumber(1,7);
        setCurrentDice((prev) => random);

        if(!selectedNumber){
            setError("Please select first"); 
            return;
        }

        setError("")

        if(selectedNumber == random){
            setScore(prev => prev + random)
        } else {
            setScore((prev => prev - 2))

        }

        setSelectedNumber(undefined);
    }

  return (
    <MainContainer>
        <div className='top-section'>
            <TotalScore score={score}></TotalScore>
            <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setError={setError}></NumberSelector>
        </div>
        <RoleDice currentDice={currentDice} rollDice={rollDice}></RoleDice>

        <div className='reset'>
            <Button onClick={()=> {setScore(0);setSelectedNumber(undefined)}}>Reset</Button>
        </div>
    </MainContainer>
  ) 
}

export default GamePlay

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .top-section{
        display: flex;
        justify-content: space-evenly;
        align-items: end;
    }
    .reset{
        display: flex;
        /* align-items: center; */
        justify-content: center;
    }
`

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border: none;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.5s background ease-in;


    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.5s background ease-in;
    }
`