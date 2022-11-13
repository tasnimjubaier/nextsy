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

const Billing = styled.div`
	color: darkblue;
	font-size: 50px;
	text-align: left;
  
  margin: 20px 0 0 0;
`;

const BillingTag = styled.div`
	color: blue;
	font-size: 10px;
	text-align: left;
  
  margin: 20px 0 0 0;
`;

const Button = styled.button`
	width: 80%;
	max-width: 300px;
	min-height: 30px;
	margin: 10px 0px;
	font-size: 20px;
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
		// color: blue;
	}
`;

const SubTitle = styled.div`
	color: blue;
	font-size: 10px;
	text-align: left;
  
  margin: 20px 0 0 0;
`;

const Text = styled.div`
	font-size: 10px;
	text-align: left;
  
  margin: 10px 0 0 0;
`;


const PaymentCard = ({type}) => {
  return (
    <Wrapper>
      <MilitaryTechIcon sx={{fontSize: 50, position:'relative', left: "-10px"}}/>
      <Title>
        Engage with customers and better understand their needs
      </Title>
      <Description>
       {"so you're equipped with the right insights to identify features that add real value."}
      </Description>
      <Billing>
        $130
      </Billing>
      <BillingTag>
        only
      </BillingTag>
      <Button>
        Purchase
      </Button>

      <SubTitle>
        this is a subtitle
      </SubTitle>

      <Text>
        text
      </Text>
      <Text>
        text
      </Text>
      <Text>
        text
      </Text>
      <Text>
        text
      </Text>
      <Text>
        text
      </Text>
      <Text>
        text
      </Text>



    </Wrapper>
  )
}

export default PaymentCard