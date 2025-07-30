import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
   <ScoreContainer>
        <div className='score'>
            <h1>{score}</h1>
            <div>
                <p>Total Score</p>
            </div>
        </div>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    
    .score h1{
        font-size: 100px;
        line-height: 100px;
        margin-bottom: 0.2rem;
    }
    p{
        font-size: 24px;
        font-weight: 500px;
        margin-top: 0;
    }
`