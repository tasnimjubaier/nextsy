import React from 'react'
import { Chart } from "react-google-charts";
import styled from 'styled-components'

const Divi = styled.div`
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
  width: 100%;
  // height : 500px;
  display:flex;
  overflow: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(222, 222, 222, 0.97);
  align-items: center;
  padding: 100px;
`;

const GoogleChart = () => {
	return (
		<Divi>
			<Chart
				chartType="ScatterChart"
				data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
				width="100%"
				height="400px"
				legendToggle
			/>
		</Divi>
	)
}

export default GoogleChart