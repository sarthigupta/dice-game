import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error,selectedNumber,setSelectedNumber,setError}) => {

    const arr = [1,2,3,4,5,6];
    


    // console.log(selectedNumber);
    
  return (
    <NumberSelectorContainer>
        <p>{error}</p>
        <div className='flex'>
        {
            arr.map((value, i) => (
                <Box isSelected={value === selectedNumber} key={i} onClick={()=>{setSelectedNumber(value);setError("")}}>{value}</Box>
            ))
        }
        
        </div>  
        <p>Select Number</p>    
    </NumberSelectorContainer>
    
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    cursor: pointer;
    .flex{
        display: flex;
        gap: 24px;
        margin-bottom: .2rem;
        
    }
    p{
        font-size: 24px;
        font-weight: 700;
        margin-top: 0;
    }
    
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" :"white"};
    color: ${(props) => !props.isSelected ? "black" :"white"};
`