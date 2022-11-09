import styled from 'styled-components'
import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Div = styled.div`
  width: 100%;
  height : 100vh;
  display:flex;
  overflow: visible;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: rgba(153, 153, 153, 0.67);
  padding: 100px;
`;

const RightDiv = styled.div`
  width: 10%;
  height : inherit;
  display:flex;
  overflow: visible;
  flex-direction: row;
  flex-wrap: wrap;
  // align-items: center;
  justify-content: center;
  background: rgba(143, 143, 143, 0.67);
  // padding: 100px;
`;

const MiddleDiv = styled.div`
  width: 80%;
  height: inherit;
  // position: relative;
  display: flex;
  overflow: auto;
  background: rgba(183, 183, 183, 0.67);
  flex-direction: column;
`;

const LeftDiv = styled.div`
  width: 20%;
	height: 100vh;
  position: sticky;
  top: 0;
  display:flex;
  // overflow: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: right;
  justify-content: center;
  background: rgba(143, 143, 143, 0.67);
`;

const Shell = styled.div`
	width: 100%;
  // height: 100vh;
	display:flex;
	// overflow: visible;
	flex-direction: row;
	flex-wrap: wrap;
	// align-items: center;
	background: rgba(153, 153, 153, 0.67);
  position: absolute;
`;



const InnerDiv = styled.div`
	height: inherit;
  margin: 0 10px 0 30px;
  overflow: auto;
  background: rgba(143, 143, 143, 0.67);
  padding: 20px 0 40px 0;
`;

const Box = styled.div`
	position: ${props => props.position ? props.position : "absolute"};
	width: 200px;
	height: 150px;
	background: aliceblue;
	display: flex;
  align-items: center;
  justify-content: center;
	border-radius: 20px;
`;


const Content = styled.div`
  width: 100%
  height: inherits;
  overflow: auto;
  padding: 40px;
	font-size: 14px;
	word-wrap: break-word;
	letter-spacing: 0.05em;
`;


const Playground2 = () => {
	const [content, setContent] = useState("");
  
  useEffect(() => {
    const callApi = async () => {
      const data = await fetch("/api/content").then(res => res.json()).then(res => res.data)
      setContent(data.substring(0, 10000))
    }
    callApi()

  }, [content]);

  return (
  <Shell>
		<LeftDiv>
      <Sidebar/>
    </LeftDiv>
		<MiddleDiv> 
      <Content> 
        <h1> An Article </h1>
        {content} 
      </Content>
      <Footer />
    </MiddleDiv>
    
		{/* <RightDiv> right </RightDiv> */}
	</Shell>
  )
}

export default Playground2