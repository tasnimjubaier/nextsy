import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import testimonials from '../../../data/testimonials.json'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from 'axios';


const Wrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background: rgba(218, 218, 218, 1);

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


export const Projects = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => res.data).then(res => {
      const data = res
      console.log(data)
      setContent(data) 
    }) 
  }, []) 

  return (
    <Wrapper>
      <OuterDiv>
        <pre>
        {JSON.stringify(content, null, 2)}
        </pre>
      </OuterDiv>
    </Wrapper>
  )
}
