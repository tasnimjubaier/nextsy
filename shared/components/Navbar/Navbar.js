import React from 'react'
import styled  from 'styled-components'
import MainWrapper from '../MainWrapper/MainWrapper'
import { Inter, Roboto } from '@next/font/google'
import logo from '../../../public/logo.png'
import Image from 'next/image'
// import Link from 'next/link'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const roboto = Roboto({
  weight: '400'
})

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  font-weight: bold;
  background: transparent;
  position: sticky;
  top: 0;

  z-index: 1;
  
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

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
  font-weight: normal;

  display: flex;
  justify-content: space-around; 
  align-items: center;
  

  margin: 0 15% 0 30%;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  padding: 5px;
  :hover {
    border-bottom: 4px solid gray;
    font-weight: semi-bold;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="landingpage">
        <Logo className={roboto.className}>
          <Image src={logo} alt="" style={{width: 40, height:40, margin:"0 10px 0 0"}} />
            nextsy
        </Logo>
      </Link>
      <Others>
        <StyledLink to="landingpage">
          Landing
        </StyledLink>
        <StyledLink to="hover">
          HoverBoard
        </StyledLink>
        <StyledLink to="playground">
          Playground
        </StyledLink>
        <StyledLink to="faq">
          Faq
        </StyledLink>
      </Others>
    </Wrapper>
  )
}

export default Navbar