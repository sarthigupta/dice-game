import React from 'react'
import styled from 'styled-components'


const StartGame = ({toggle}) => {
    console.log(toggle);
    
  return (
    <Container>
        <img src="./images/dices 1.png" alt="" />
        <div className='content'>
            <h1 >DICE GAME </h1>
            <div><Button onClick={toggle}>Start Game</Button></div>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 98vh;
    font-family: "Poppins",sans-serif;


    .content{
        display: flex;
        flex-direction: column;
        
        
        
        
    }
    .content div{
        display: flex;
        justify-content:end;
    }
    .content h1{
        font-size: 96px;
        white-space: nowrap
        
    }


`;
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
