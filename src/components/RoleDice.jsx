import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice,rollDice}) => {

    

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`./images/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <Button onClick={rollDice}>Click on Dice to roll</Button>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    p{
        font-size: 24px;
    }

`;

const Button = styled.button`
    color: black;
    padding: 10px 18px;
    background: white;
    border: none;
    border-radius: 5px;
    min-width: 220px;
    font-size: 16px;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.5s background ease-in;

    

    
`