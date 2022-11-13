import { lime } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
	font-size: 40px;
  // font-weight: bold;
  background: rgba(248, 248, 248, 1);

  display: flex; 
  flex-direction: row;
	flex-flow: wrap;
  // justify-content: center;
  // align-items: center;

	position: relative;
`

const moveX = keyframes`
from { left: 0; } to { left: 1400px; }
`;

const moveY = keyframes`
	from { top: 0; } to { top: 800px; }
`;

const Box = styled.div`
	width: 30px;
	height: 30px;
	background : white;
	border: 2px solid black;
	user-select: none;

	font-size: 30px;
	font-weight: bold;
	color: transparent;
	${props => {
		if(props.x > 0)
		return css`
			text-shadow: 0px -15px 1px #000
		`
		else
		return css`
			text-shadow: 0px -15px 1px #000
		`
	}};
	transition: text-shadow .3s ease-in-out;

	display: flex; 
  justify-content: center;

	position: absolute; 
	// top: 200px;
	// left: 200px;

	animation: ${moveX} 3.05s linear 0s infinite alternate, ${moveY} 3.4s linear 0s infinite alternate;
`;



const getPoints = ({width, height}) => {
	let arr = []
	let lim = 1000
	for(let i = 1; i <= lim; i++) {
		arr.push(i)
	}
	return arr
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const HoverBoard = () => {
	const [points, setPoints] = useState([])
  const [windowDimensions, setWindowDimensions] = useState(null);
	const [mousePos, setMousePos] = useState({});

	useEffect(() => {
		setWindowDimensions(getWindowDimensions())
		function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
		const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
			window.removeEventListener('resize', handleResize)
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
	}, [])

	useEffect(() => {
		if(windowDimensions) setPoints(getPoints(windowDimensions))
	}, [windowDimensions])

	return (
		<Wrapper>
			{/* {points.map((point, key) => (
				<Point top={point.y} left={point.x} key={key}>.</Point>
			))} 
			<Point top={0} left={0} >.</Point>
			<Point top={10} left={0} >.</Point> */}
			{/* {points.map((point, key) => (
				<Box x={mousePos.x} y={mousePos.y} key={key}>.</Box>
			))} */}
			<Box>.</Box>
		</Wrapper>
	)
}

export default HoverBoard