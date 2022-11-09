import React from 'react'
import styled from 'styled-components';


const Shell = styled.div`
	width: 100%;
	height: 400px;
	display:flex;
	overflow: visible;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: rgba(173, 173, 173, 1);
	border: 2px solid red;
`;

const Footer = () => {
	return (
		<Shell>
			<h1>
				A Footer
			</h1>
		</Shell>
	)
}

export default Footer