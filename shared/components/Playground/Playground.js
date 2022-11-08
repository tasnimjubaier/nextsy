import styled from '@emotion/styled';
import { stepContentClasses } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Circle from '../Drawing/Circle/Circle'
import MainWrapper from '../MainWrapper/MainWrapper'

const Div = styled.div`
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
  width: 100%;
  height : 500px;
  display:flex;
  overflow: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: whitesmoke;
  align-items: center;
  padding: 100px;
`;

const Playground = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    
    const callApi = async () => {
      const data = await fetch("/api/content").then(res => res.json()).then(res => res.data)
      setContent(data)
    }
    callApi()
  }, [content]);
  
  return (
    // <MainWrapper back={"rgba(246, 246, 246, 1)"}>
    //   <Circle size={50} />
    // </MainWrapper>
  <Div>
    {content}
  </Div>
  )
}

export default Playground