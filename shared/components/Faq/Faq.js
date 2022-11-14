import React, { useState } from 'react'
import styled from 'styled-components';
import MainWrapper from '../MainWrapper/MainWrapper'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(248, 248, 248, 1);

  display: flex; 
  flex-direction: column;
	flex-flow: wrap;

	position: relative;
`

const Box = styled.div`
  width: 400px;
  max-height: 0px;
  // margin: 200px 0 0 300px;
  background: whitesmoke;
  overflow: hidden;

  padding: 30px;

  :hover {
    max-height: 1000px;
  }

  transition: max-height .5s ease-in-out;
`;


const Faq = () => {
  const [expanded, setExpanded] = useState('0'); 

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Wrapper>
      <Box>
      Welcome to the ve to do is to press the Generate Random Words button, and a list of random words will appear. Below are some of the common ways people use this tool.
      </Box>
    </Wrapper>
  )
}

export default Faq