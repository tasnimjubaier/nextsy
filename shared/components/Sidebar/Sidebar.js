import React from 'react'
import styled from 'styled-components'
import topics from "../../../data/topics.json"
import Topic from './Topic';

const InnerDiv = styled.div`
	// max-height: 100vh;
	height: inherit;
	width: 100%;
  margin: 0 1% 0 10%;
  overflow: auto;
  // background: inherit;
  padding: 20px 0 40px 0;
	cursor: pointer;
`;

const Sidebar = () => {
	return (
		<InnerDiv>
			{
				topics.map((topic, key) => (
					<Topic key={key} topic={topic} />
				))
			}
		</InnerDiv>
	)
}

export default Sidebar