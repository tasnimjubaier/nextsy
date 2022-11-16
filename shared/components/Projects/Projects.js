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
  return (
    <Wrapper>
      <OuterDiv>
        helloworld
      </OuterDiv>
    </Wrapper>
  )
}
