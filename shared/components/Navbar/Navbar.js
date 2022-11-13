import React from 'react'
import styled  from 'styled-components'
import MainWrapper from '../MainWrapper/MainWrapper'
import { Inter, Roboto } from '@next/font/google'
import logo from '../../../public/logo.png'
import Image from 'next/image'

const roboto = Roboto({
  weight: '400'
})

const Logo = styled.div`
  font-size: 45px;
  // font-weight: bold;
  flex: 20%;
  min-width: 300px;
  
  display: flex;
  justify-content: center; 
  align-items: center;
  user-select: none;

  :hover {
    cursor: pointer;
  }
  
  // background: blue;
`;

const Others = styled.div`
  font-size: 30px;
  flex: 80%;

  display: flex;
  justify-content: center; 
  align-items: center;
  // background: red;
`;


const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  font-weight: bold;
  background: white;
  position: sticky;
  top: 0;

  z-index: 1;
  
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Logo className={roboto.className}>
        <Image src={logo} alt="" style={{width: 40, height:40, margin:"0 10px 0 0"}}>
        </Image>
          nextsy
      </Logo>
      <Others>this is other field</Others>
    </Wrapper>
  )
}

export default Navbar