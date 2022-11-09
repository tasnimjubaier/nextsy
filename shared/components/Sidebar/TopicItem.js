import React from 'react'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const ItemDiv = styled.div`
	display: block; 
	user-select: none;
`;
const TitleDiv = styled.div`
	background: pink;
`;

const SlideInKeyframe = keyframes`
	from {
		height: 0px;
	}
	to {
		height: 100px;
	}
`;


const SubDiv = styled.div`
	height: 0px;
	overflow: hidden;
	display: ${props => props.show ? "block" : "none"};
	visibility: ${props => props.show ? "visible" : "hidden"};
	:active{	
		background: red;
		animation-name: ${SlideInKeyframe};
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}
`;


const TopicItem = ({item}) => {
	const [showSub, setShowSub] = useState(false)


	return (
		<ItemDiv>
			<TitleDiv onClick={() => setShowSub(!showSub)}><a>{item.name}</a></TitleDiv>

			<SubDiv show={showSub}>
				{
					item.subItems.map((sub, key) => (
						<div key={key}>{sub}</div>
					))
				}
			</SubDiv>
		</ItemDiv>
	)
}

export default TopicItem