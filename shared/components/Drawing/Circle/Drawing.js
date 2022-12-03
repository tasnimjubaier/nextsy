import React from 'react'
import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import BouncingText from '../../BouncingText/BouncingText';
import FancyText from '../../FancyText/FancyText';


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(218, 210, 210, 1);
  overflow: hidden;

  display: flex; 
  flex-direction: column;
  align-items: center;
	justify-content: center;

	background: rgba(0, 100, 1000 , 0.1);

	position: relative;
	cursor: none;
`

const BackCircles = styled.div`
	width: 100%;
	height: 100%;
	positioin: relative;
	z-index: 1;
	
	background: black;
`;

const Circle = styled.div`
	${props => css`
		width: ${props => props.size}px;
		height: ${props => props.size}px;
		background: ${props => props.color};
		position: absolute;
		top: ${props => props.top}%;
		left: ${props => props.left}%;
		border-radius: 50%;
	`}
`;

const TransBox = styled.div`
	width: 1300px;
	height: 600px;
	background: transparent;
	backdrop-filter: blur(90px);
	
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Cursor = styled.div`
	position: absolute;
	pointer-events: none;
	width: 50px;
	height: 50px;
	background: black;
	border-radius: 50%;
	// mix-blend-mode: normal; 
	z-index: 101;
	top: ${props => props.Y-25}px;
	left: ${props => props.X-25}px;
	
`;


const Drawing = () => {
	const [mousePos, setMousePos] = useState({})
	const [mouseX, setMouseX] = useState(0)
	const [mouseY, setMouseY] = useState(0)

	const handleMouseMove = (event) => {
		setMouseX(event.clientX)
		setMouseY(event.clientY)
		// console.log('here')
	}

	useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
	}, [])
	return (
		<Wrapper>
			<BackCircles>
				<Circle size={30} color={"blue"} top={90} left={20} />
				<Circle size={60} color={"blue"} top={10} left={20} />
				<Circle size={90} color={"red"} top={30} left={20} />
				<Circle size={120} color={"violet"} top={10} left={90} />
				<Circle size={130} color={"green"} top={70} left={70} />
				<Circle size={70} color={"blue"} top={40} left={60} />
				<Circle size={90} color={"red"} top={10} left={40} />
				<Circle size={200} color={"pink"} top={80} left={40} />
				<Circle size={300} color={"blue"} top={15} left={40} />
				<Circle size={400} color={"red"} top={30} left={70} />
				<Circle size={700} color={"purple"} top={50} left={-10} />
			</BackCircles>
			<Cursor X={mouseX} Y={mouseY}></Cursor>
			<TransBox>
				<BouncingText text={"Sadia padia gondo korce"} />
			</TransBox>
		</Wrapper>
	)
}

export default Drawing