import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import testimonials from '../../../data/testimonials.json'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from 'axios';
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import { borderBottom } from '@mui/system';


const Wrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background: rgba(218, 218, 218, 1);
  overflow: hidden;

  display: flex; 
  flex-direction: column;
  align-items: center;

	position: relative;
`

const OuterDiv = styled.div`
  width: 60%;
  min-height: 800px;
  background: white;
  margin-top: 80px;

  display: flex; 
  flex-direction: column;
  align-items: center;

  user-select: none;
`

const Background = styled.div`
  width: 100%;
  height: 100px;
  // position: absolute;
  // background: yellow;
  // z-index: 0;
`;

export const Projects = () => {
  const [content, setContent] = useState(null)

  // const parallax = useParallax({
  //   speed: 100
  // })

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data).then(res => {
      const data = res
      console.log(data)
      setContent(data) 
    }) 
  }, []) 

  return (
      // <ParallaxProvider>
    <Wrapper>
        {/* <OuterDiv>
          <pre draggable={true}>
          {JSON.stringify(content, null, 2)}
          </pre>
          <Background ref={parallax.ref} />
        </OuterDiv> */}
          <Parallax
            // translateX={['50vw', '-60vw']}
            // speed={100}
            // scale={[0.75, 30]}
            
            rotate={[0, 18000]}
            easing="easeInQuad"
            style={{background: "none", fontSize:30, height: 100, margin:"400px 0"}}
          >I love you Faru</Parallax>

    </Wrapper>
// {/* </ParallaxProvider> */}
  )
}
