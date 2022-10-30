import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/system'

const StyledBox = styled(Box)`
  width: 100%;
  min-height: ${props => props.height ?  `${props.height}px`: "100vh"};
  overflow: hidden;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: ${props => props.back ? props.back : "rgba(225, 191, 88, 0.78)"};
`

const MainWrapper = ({height, back, children}) => {
  return (
    <StyledBox back={back} height={height}>
      {children}
    </StyledBox>
  )
}

export default MainWrapper