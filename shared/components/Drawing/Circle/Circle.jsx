import React from 'react'
import styled from 'styled-components'

const Ball = styled.div`
  ${props => `
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: 50%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  `}
`;



const Circle = ({size}) => {
  return (
    <Ball size={size}/>
  )
}

export default Circle