import React, { useEffect } from 'react'
import { useState } from 'react';
import styled, { css } from 'styled-components';

const Sentence = styled.div`
	// background: black;
	width: 100%;
	height: 100%;

	display: flex; 
	justify-content: center;
	align-items: center;
`;

const Letter = styled.span`
	display: table-cell;
	margin: 0;
	padding: 0;

	font-size: 7.5em;
	font-family: 'Caveat', cursive;
	letter-spacing: .1em;

	${props =>{
		let id = props.id
		let cur = props.current 
		
		if(cur == -1 || Math.abs(cur-id) > 2) return css`
			color: #111;
			filter: blur(0px);
		`
		let d = Math.abs(cur-id)
		return css`
			color: #111;
			filter: blur(${2}px);
			text-shadow: 0 0 10px #00b3ff,
									0 0 20px #00b3ff,
									0 0 40px #00b3ff,
									0 0 80px #00b3ff,
									0 0 120px #00b3ff,
									0 0 200px #00b3ff,
									0 0 300px #00b3ff,
									0 0 400px #00b3ff,
									0 0 500px #00b3ff;
		`
	}}

	// :hover {
	// 	color: #fff;
	// 	filter: blur(2px);
	// 	text-shadow: 0 0 10px #00b3ff,
	// 							0 0 20px #00b3ff,
	// 							0 0 40px #00b3ff,
	// 							0 0 80px #00b3ff,
	// 							0 0 120px #00b3ff,
	// 							0 0 200px #00b3ff,
	// 							0 0 300px #00b3ff,
	// 							0 0 400px #00b3ff,
	// 							0 0 500px #00b3ff;
	// }
`;



const FancyText = ({text}) => {
	const [curId, setCurId] = useState(-1)
	const letters = getLetters(text)

	const handleMouseEnter = id => e => {
		setCurId(id)
	}

	const handleMouseLeave = id => e => {
		setCurId(-1)
	}

	return (
		<Sentence>
			{
				letters.map((l, key) => (
					<Letter key={key} id={key} current={curId} 
						onMouseEnter={handleMouseEnter(key)} onMouseLeave={handleMouseLeave(key)} >
						{l == ' ' ? '\xa0' : l} 
					</Letter>
				))
			}
		</Sentence>
	)
}

const getLetters = (text) => {
	let ret = [];
	for(let i = 0; i < text.length; i++) {
		ret.push(text[i])
	}
	return ret
}


export default FancyText