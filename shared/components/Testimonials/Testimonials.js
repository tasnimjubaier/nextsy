import React from 'react'
import styled, { css } from 'styled-components';
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
  background: ${props => props.active ? "rgba(0, 59, 210, 0.8)" : "rgba(101, 145, 255, 0.8)"};
  box-sizing: border-box;

  padding: ${props => props.active ? 3 : 2}px;
  background-clip: content-box;

  transition: padding .05s ease-out, background .05s ease-out;

  :hover {
    ${props => props.active ? css`
      cursor: pointer;
    ` : css`
      padding: 1px;
      cursor: pointer;
      background: rgba(0, 59, 210, 0.8);
    `}
  }
`;

const ALink = styled.a`
  color: blue;
  :hover {
    text-decoration: underline;
    color: blue;
  }
`;


const Testimonials = () => {
  const [curId, setCurId] = useState(0)
  const [activeBullets, setActiveBullets] = useState([])
  const refs = useRef([])
  const bulletRefs = useRef([])
  const refDiv = useRef(null)
  
  useEffect(() => {
    refs.current = refs.current.slice(0, testimonials.length)
    bulletRefs.current = bulletRefs.current.slice(0, testimonials.length)
  })

  useEffect(() => {
    let bull = []
    bull = bull.slice(0, testimonials.length)
    bull[curId] = 1;
    setActiveBullets(bull)
  }, [curId])


  const handleScroll = id => e => {
    e.preventDefault()
    refDiv.current.scrollTo({behavior: "smooth", left: refDiv.current.offsetWidth * id})
     
    // let bull = [...activeBullets]
    // bull[curId] = 0
    // bull[id] = 1
    
    // setActiveBullets(bull)
    setCurId(id)
  }

  function notifyMe(e) {
    e.preventDefault()
    window.open('http://www.leetcode.com', '_blank');
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          console.log(notification)
          notification.onclick = (event) => {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            alert("clicked")

            console.log('here')
            window.open('http://www.leetcode.com', '_blank');
          }
          // notification.onclose = (event) => { 
          //   event.preventDefault()
          //   alert("notification closed")
          // };
          // notification.onshow = (e) => {
          //   e.preventDefault()
          //   alert('showing')
          // }
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
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
                    <h1>{t.name}{t.id}</h1>
                    <p>{t.company.name}</p>
                    <p>{t.company.bs}</p>
                    <p>{t.phone}</p>
                    <ALink href={`http://www.${t.website}`} rel="noreferrer" target="_blank">{t.website} --&gt;</ALink>
                    <p>{t.address.city}</p>
                  </Item>
                ))
              }
          </TestDiv>
          <Scroller>
          {
                testimonials.map((t, key) => (
                  <Bullet key={key} onClick={handleScroll(t.id)} ref={el => bulletRefs.current[t.id] = el} active={activeBullets[t.id]}>

                  </Bullet>
                ))
              }
          </Scroller>
          {/* <Bullet onClick={notifyMe}>
            notify me
          </Bullet> */}
          
      </OuterDiv>
    </Wrapper>
  )
}

export default Testimonials