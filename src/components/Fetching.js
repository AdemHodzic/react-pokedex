import React from 'react'
import styled from 'styled-components';


const StyledGif = styled.img`
  object-fit: contain;
  height: 91.5vh;
  width: 100%;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


const Fetching = (props) => {
  const gifLocation = props.success ? require('../static/working_pikachu.gif') : require('../static/sad_pikachu.webp');
  return (
    <StyledDiv>
      <StyledGif src={gifLocation} alt="Loading..."></StyledGif>      
    </StyledDiv>
  )
}

export default Fetching
