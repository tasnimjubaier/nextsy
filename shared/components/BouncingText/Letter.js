import React from 'react'
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
	0%,100%{
		transform: scale(1, 1);
	}
	84%, 92%{
		transform: scale(.86, 1.1);
	}
	88%, 96%{
		transform: scale(1.1, .97);
	}
	79%{
		transform: scale(1.3, .8);
	}
`;
const Span = styled.span`
	display: table-cell;
	margin: 0;
	padding: 0;

	font-size: 4.9em;
	font-family: 'Rubik Distressed', cursive;
	letter-spacing: .1em;

	${props => {
		if(props.dancing)
			return css`
				animation: ${bounce} .5s linear 1;
			`
	}}
`;
const Letter = ({letter}) => {
	const [dancing, setDancing] = useState(false)


	const handleMouseOver = (e) => {
		setDancing(true)
		setTimeout(() => setDancing(false), 500)
	}

	return (
		<Span onMouseEnter={handleMouseOver} dancing={dancing}>
			{letter}
		</Span>
	)
}

export default Letter