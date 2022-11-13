import React from 'react'
import styled from 'styled-components'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Wrapper = styled.div`
  width: 500px;
  border: 3px solid blue;
  border-radius: 10px;
  box-shadow: 6px 5px blue;
  padding: 40px 70px 40px 40px;
	display: flex;
  flex-direction: column;
	align-items: left;
	justify-content: top;
`;

const Title = styled.div`
	font-size: 22px;
	color: rgba(0, 42, 94, 1);
	text-align: left;
  line-height: 1.5em;
  margin: 20px 0 0 0;
`;

const Description = styled.div`
	color: gray;
	font-size: 20px;
	text-align: left;
  line-height: 1.4em;

  
  margin: 20px 0 0 0;
`;

const Outcome = styled.div`
	color: blue;
	font-size: 20px;
	text-align: left;
  
  margin: 20px 0 0 0;
`;



const InfoCard = ({icon, title, description, outcome}) => {
  return (
    <Wrapper>
      {icon || <MilitaryTechIcon sx={{fontSize: 80, position:'relative', left: "-10px"}}/> }
      <Title>
        {title || "Engage with customers and better understand their needs"}
      </Title>
      <Description>
       {description || "so you're equipped with the right insights to identify features that add real value."}
      </Description>
      <Outcome>
        {outcome || "No guesswork."}
      </Outcome>
    </Wrapper>
  )
}

export default InfoCard