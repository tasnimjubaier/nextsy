import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import MainWrapper from '../MainWrapper/MainWrapper'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Fade } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Wrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background: rgba(248, 248, 248, 1);

  display: flex; 
  flex-direction: row;
	flex-flow: wrap;
  align-items: center;
  justify-content: center;

	position: relative;
`
const AccordionWrapper = styled.div`
  width: 70%;
  height: 700px;
  // margin: 100px 0 0 300px;
  background: lightgreen;
  overflow: hidden;

  display: flex; 
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  padding: 30px;
`;

const AccordionStyled = styled(Accordion)`
  margin: 0 0 17px 0;

  &:before {
    display: none;
    background: blue;
    z-index:100;

  }
`;
const AccordionSummaryStyled = styled(AccordionSummary)`
  background: none;
  height: 70px;
  margin: 0 0 10px 0;
  border: 2px solid blue;
  border-radius: 10px;
  box-shadow: 6px 5px blue;
`;
const AccordionDetailsStyled = styled(AccordionDetails)`
  background: red;
  // height: 300px;
`;
const Button = styled.button`
width: 120px;
height: 50px;
font-size: 30px;
font-weight: bold;
background: rgba(1, 98, 216, 1); 
color: white; 
border: 1px solid black;
border-radius: 6px;
box-shadow: 5px 6px black;
transition: background .1s ease-in, box-shadow .1s linear;

:hover {
  cursor: pointer;
  background: rgba(0, 84, 187, 1); 
  box-shadow: 6px 7px black;
}
`;

const Box = styled.div`
  margin: 10px 0 10px 0;
  width: 80%;
  height: 0;
  overflow: hidden;
  
  background: white;
  transition: height .2s linear;
`;

const Faq = () => {
  const [tog, setTog] = useState([true, true, true])
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, 3)  
  })
  
  const handle = (i) => (e) => {
    e.preventDefault()
    refs.current[i].style.height = tog[i] ? "100px" : "0";
    const toggle = {...tog}
    toggle[i] = !tog[i]
    setTog(toggle);
  }

  return (
    <Wrapper>
      <AccordionWrapper>
        <Button onClick={handle(0)}>toggle</Button>
        <Box ref={el => refs.current[0] = el}>boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        </Box>
        <Button onClick={handle(1)}>toggle</Button>
        <Box ref={el => refs.current[1] = el}>boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        </Box>
        <Button onClick={handle(2)}>toggle</Button>
        <Box ref={el => refs.current[2] = el}>boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        boasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfxboasdfkasjfx
        </Box>
      </AccordionWrapper>
    </Wrapper>
  )
}

export default Faq