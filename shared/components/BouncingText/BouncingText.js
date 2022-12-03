import React from 'react'
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Letter from './Letter';

const Sentence = styled.div`
	width: 100%;
	height: 100%;

	display: flex; 
	justify-content: center;
	align-items: center;
	flex-flow: wrap;
`;


const BouncingText = ({text}) => {

	const letters = getLetters(text)
	return (
		<Sentence>
			{
				letters.map((l, key) => (
					<Letter key={key} letter={l == ' ' ? '\xa0' : l} />
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


export default BouncingText