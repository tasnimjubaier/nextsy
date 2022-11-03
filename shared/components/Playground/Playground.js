import React from 'react'
import Circle from '../Drawing/Circle/Circle'
import MainWrapper from '../MainWrapper/MainWrapper'

const Playground = () => {
  return (
    // <MainWrapper back={"rgba(246, 246, 246, 1)"}>
    //   <Circle size={50} />
    // </MainWrapper>
    <MainWrapper back={"black"}>
      <Circle size={50} />
      <Circle size={50} />
    </MainWrapper>
  )
}

export default Playground