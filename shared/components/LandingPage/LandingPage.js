import React from 'react'
import styled, { keyframes } from 'styled-components';
import HoverBoard from '../HoverBoard/HoverBoard';
import InfoCard from '../InfoCard/InfoCard';
import MainWrapper from '../MainWrapper/MainWrapper'
import PaymentCard from '../PaymentCard/PaymentCard';
 

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
	font-size: 40px;
  background: rgba(248, 248, 248, 1);

  display: flex; 
  flex-direction: column;
	flex-flow: wrap;

	// position: relative;
`


const blink = keyframes`
	0% {
		width: 12px;
		height: 12px;
		filter: blur(2px);
		background: rgba(85, 214, 126, 1);
	}

	50% {
		width: 13px;
		height: 13px;
		filter: blur(.5px);
		background: rgba(57, 145, 85, 1);
	}
	100% {
		width: 12px;
		height: 12px;
		filter: blur(2px);
		background: rgba(85, 214, 126, 1);
	}
`;

const CircleAnimation = styled.div`
	margin: 0 10px 0 15px;
	border-radius: 50%;
	animation: ${blink} 1s ease-in infinite;
`;

const Badge = styled.div`
	border: 2px solid rgba(149, 149, 185, 1);
	border-radius: 5em;
	font-size: 14px;
	width: 210px;
	height: 30px;
	color: rgba(123, 123, 164, 1);
	font-weight: bold;

	display: flex;
	align-items: center;
	justify-content: center;
`;


const BrandTitle = styled.div`
	font-size: max(min(7vw, 85px), 40px);
	color: rgba(0, 42, 94, 1);
	width: 70%;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;
	
	
	}
`;

const Description = styled.div`
	color: gray;
	font-size: 30px;
	max-width: 1000px;
	margin: 20px;
	width: 70%;
	// padding: 200px;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 80%;
	max-width: 300px;
	min-height: 70px;
	margin: 30px 0px;
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
		// color: blue;
	}
`;


const LandingPage = () => {
	return (
		<Wrapper>
			<HoverBoard>
				<Badge>
					<div style={{flex: "20%", display:'flex', justifyContent:'center'}}>
						<CircleAnimation />
					</div>
					<div style={{flex: "80%"}}>
						Limited slots available
					</div>
				</Badge>
				<BrandTitle>
					Make Ship Happen.
				</BrandTitle>
				<Description>
					Short, focused design and growth collabs for startup tech founders that push good code but feel blocked by the other stuff.
				</Description>
				<Button>Get It Today</Button>
			</HoverBoard>
			<MainWrapper flexDirection={"row"} back={"rgba(230, 236, 255, 0.8)"} height={"1000px"}>
				<InfoCard/>
				<div style={{width:"50px"}}></div>
				<InfoCard/>
			</MainWrapper>
			<MainWrapper flexDirection={"row"} back={"rgba(248, 248, 248, 1)"} height={"1000px"}>
				<PaymentCard />
				<div style={{width:"50px"}}></div>
				<PaymentCard />
			</MainWrapper>
		</Wrapper>
	)
}

// badge 
// title 
// description 
// button 



export default LandingPage