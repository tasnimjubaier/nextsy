import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/system'

const StyledBox = styled(Box)`
  width: 100%;
  min-height: ${props => props.height ?  `${props.height}px`: "100vh"};
  overflow: hidden;
  display: flex; 
  flex-direction: ${props => props.flexDirection ?  `${props.flexDirection}`: "column"};
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: ${props => props.back ? props.back : "rgba(248, 248, 248, 1)"};

  position: relative;
  z-index: 0;
`

const MainWrapper = ({flexDirection, height, back, children}) => {
  return (
    <StyledBox flexDirection={flexDirection} back={back} height={height}>
      {children}
    </StyledBox>
  )
}

export default MainWrapper