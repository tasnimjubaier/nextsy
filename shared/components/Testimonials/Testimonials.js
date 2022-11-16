import React from 'react'
import styled from 'styled-components';
import testimonials from '../../../data/testimonials.json'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background: rgba(248, 248, 248, 1);

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
`
const TitleDiv = styled.div`
  // background: red;
  font-size: 35px;
  margin: 60px 0 20px 0;
`
const DescDiv = styled.div`
  font-size: 25px;
  margin: 0 0 80px 0;
`
const TestDiv = styled.div`
  width: 60%;
  height: auto;
  background: black;
  margin: 0 0 5px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: hidden;

`
const Item = styled.section`
  min-width: 100%;
  height: 480px;
  background: white;
  padding: 40px 60px;
  display: flex; 
  flex-direction: column;
  align-items: center;  
`

const Scroller = styled.div`
  width: 300px;
  height: 30px;
  margin: 0 0  400px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Bullet = styled.div`
  width:22px; 
  height:22px;
  border-radius: 50%;
  background: rgba(101, 145, 255, 0.8);
  box-sizing: border-box;

  padding: 2px;
  background-clip: content-box;

  transition: padding .05s ease-out, background .05s ease-out;

  :hover {
    padding: 0px;
    cursor: pointer;
    background: rgba(0, 59, 210, 0.8);
  }
  
  .active {
    padding: 4px;
    background: red;
  }
`;


const Dummy = styled.div`
  background: red;
  .act {
    background: blue;
  }
`;


const Testimonials = () => {
  const [curId, setCurId] = useState(0)
  const refs = useRef([])
  const bulletRefs = useRef([])
  const refDiv = useRef(null)
  
  useEffect(() => {
    refs.current = refs.current.slice(0, testimonials.length)
    bulletRefs.current = bulletRefs.current.slice(0, testimonials.length)
  })

  const handleScroll = id => e => {
    e.preventDefault()
    refDiv.current.scrollTo({behavior: "smooth", left: refDiv.current.offsetWidth * (id-1)})
    
    console.log(bulletRefs.current[curId].classList)
    bulletRefs.current[curId].classList.remove("active");
    bulletRefs.current[id].classList.add("active");
    console.log(bulletRefs.current[curId].classList)
    // bulletRefs.current[curId].style.background = "rgba(101, 145, 255, 0.8)";
    // bulletRefs.current[curId].style.padding = "2px";
    // bulletRefs.current[id].style.background = "rgba(0, 30, 105, 0.8)";
    // bulletRefs.current[id].style.padding = "4px";

    setCurId(id)
    // refs.current[id].scrollIntoView({
    //   behavior: "smooth"
    // });
  }
  
  return (
    <Wrapper>
      <OuterDiv>
          <TitleDiv>
          Testimonials
          </TitleDiv>
          <DescDiv>
          People Ive worked with have said some nice things...
          </DescDiv>
          <TestDiv ref={refDiv}>
              {
                testimonials.map((t, key) => (
                  <Item key={key} id={t.id} ref={el => refs.current[t.id] = el} >
                    <h1>{t.title}</h1>
                    <p>{t.description}</p>
                    <p>{t.description}</p>
                    <p>{t.description}</p>
                    <p>{t.description}</p>
                  </Item>
                ))
              }
          </TestDiv>
          <Scroller>
          {
                testimonials.map((t, key) => (
                  <Bullet key={key} onClick={handleScroll(t.id)} ref={el => bulletRefs.current[t.id] = el} className={t.id == 0 ? "active" : ""}>

                  </Bullet>
                ))
              }
          </Scroller>
          <Dummy className='act'> here you go </Dummy>
          
      </OuterDiv>
    </Wrapper>
  )
}

export default Testimonials