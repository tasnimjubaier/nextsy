import React from 'react'
import { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'

const ItemDiv = styled.div`
	display: block; 
	user-select: none;
	// padding: 2px 10px 2px 10px;
`;
const TitleDiv = styled.div`
	height: 1.5em;
	font-weight: bold;
	// margin: 2px 0 5px 0;
	// background:red;
	:hover {
		border-bottom: 1px solid red;
		// color: white;
	}
`;

const SlideInKeyframe = keyframes`
	from {
		height: 0px;
	}
	to {
		height: 200px;
	}
`;

const SubDiv = styled.div`
	height: auto;
	// background: pink;
	padding: 2px 5px;
	overflow: hidden;
	display: ${props => props.show ? "block" : "none"};
`;

const SubDivItem = styled.div`

	:hover {
		font-weight: bold;
	}
`;
	
	// ${props =>  props.show && css`
	// 	animation-name: ${SlideInKeyframe};
	// 	animation-duration: .5s;
	// 	animation-iteration-count: 1;`
	// }

const TopicItem = ({onSelectTopic, isSelected, item}) => {

	const handleClick = () => {
		console.log(isSelected)
		if(!isSelected) onSelectTopic(item.id)
		else onSelectTopic(null)
	}

	return (
		<ItemDiv>
			<TitleDiv onClick={handleClick}><a>{item.name}</a></TitleDiv>

			<SubDiv show={isSelected}>
				{
					item.subItems.map((sub, key) => (
						<SubDivItem key={key}>{sub}</SubDivItem>
					))
				}
			</SubDiv>
		</ItemDiv>
	)
}

export default TopicItem