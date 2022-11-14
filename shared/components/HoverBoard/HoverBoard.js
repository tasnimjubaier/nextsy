import { SocialDistance } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
	font-size: 40px;
  background: rgba(248, 248, 248, 1);

  display: flex; 
  flex-direction: row;
	flex-flow: wrap;

	position: relative;
`

const getPositionKeyframes = ({windowDimensions}) => {
	return {
		moveX : keyframes`
			from { left: 0; } to { left: ${windowDimensions.width - 30}px; }
		`,
		moveY: keyframes`
			from { top: 0; } to { top: ${windowDimensions.height - 30}px; }
		`
	}
}

const Box = styled.div`
	width: 10px;
	height: 10px;
	// border: 2px solid black;
	background: none;
	user-select: none;
	border-radius: 50%;

	font-size: 30px;
	font-weight: bold;
	color: transparent;
	transition: background .1s ease-in-out, width .1s ease-in-out, height .1s ease-in-out, filter .1s ease-in-out;

	display: flex; 
  justify-content: center;

	position: absolute; 

	animation: ${props => 
			css`
			${(props) => getPositionKeyframes(props).moveX} 25s linear -${props.delayX}s infinite alternate, 
			${(props) => getPositionKeyframes(props).moveY} 20s linear -${props.delayY}s infinite alternate
		`};
`;



const getPoints = ({width, height}) => {
	let arr = [] 
	let lim = 150
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

	const itemsRef = useRef([]);
	
	const handleMouseMove = (event) => {
		const distance =(xa, ya, xb, yb) => {
			return Math.sqrt( (xa-xb) * (xa-xb) + (ya-yb) * (ya-yb) )
		}
		setMousePos({ x: event.clientX, y: event.clientY })


		itemsRef.current.forEach(ref => {
			const posX = ref.getBoundingClientRect().left + 15
			const posY = ref.getBoundingClientRect().top + 15
			const mouseX = event.clientX
			const mouseY = event.clientY
			const dist = distance(posX, posY, mouseX, mouseY)

			if(dist <= 100){
				
				ref.style.width = `${20 - dist / 10}px`
				ref.style.height = `${20 - dist / 10}px`
				ref.style.background = "rgba(250, 216, 0, 0.8)" 
				ref.style.filter = "blur(2px)" 
				// ref.style.textShadow = "0px -15px 1px #000"
			}
			else {
				ref.style.width = "2px"
				ref.style.height = "2px"
				ref.style.background = "black" 
				ref.style.filter = "blur(0px)" 
				// ref.style.textShadow = "0px -15px 10px #000"
			}
		})
	}

	useEffect(() => {
		setWindowDimensions(getWindowDimensions())
		function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
		
    window.addEventListener('mousemove', handleMouseMove)
		// setInterval(() => {
		// 	console.log(itemsRef.current[0].getBoundingClientRect().top)
		// }, 1000);

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


	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, points.length);
 	}, [points]);

	const handleC = (e) => {
		e.preventDefault()
		console.log(e)
	}

	//  useEffect(() => {
	// 	console.log(itemsRef.current)
 	// }, [itemsRef]);

	return (
		<Wrapper>
			{points.map((point, key) => (
				<Box delayX={key*key%(503)} delayY={key%(503)} windowDimensions={windowDimensions} 
					ref={el => itemsRef.current[key] = el} key={key} />
			))}
		</Wrapper>
	)
}

export default HoverBoard