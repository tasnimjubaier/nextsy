import React from "react";
import styled from "styled-components";

import img from "../../../public/img.jpg";
import Image from "next/image";
import MainWrapper from "../MainWrapper/MainWrapper";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: rgba(203, 203, 203, 0.97);
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: rgba(88, 88, 88, 1);
`;

const FlexContainer = styled.div`
  width: 1000px;
  @media screen and (max-width: 1220px) {
    width: 960px;
  }
  @media screen and (max-width: 980px) {
    width: 760px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

const FlexItem = styled.div`
  padding: 0 10px;
  border: 2px solid #ccc;
  margin: 5px;
  flex: 0 1 10%;
  height: 60px;
  background: lightgreen;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: grayscale(1);

  :hover {
    filter: grayscale(0);
  }
`;

const FlexItem2 = styled.div`
  padding: 0 10px;
  border: 2px solid #ccc;
  margin: 5px;
  flex: 0 1 15%;
  height: 120px;
  background: pink;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: grayscale(1);

  :hover {
    filter: grayscale(0);
  }
`;

const Brand = () => {
  return (
    <div>
      <MainWrapper back={"rgba(222, 222, 222, 0.97)"}>
        <FlexContainer draggable={true}>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem>One</FlexItem>
          <FlexItem2>One</FlexItem2>
          <FlexItem>One</FlexItem>
        </FlexContainer>
      </MainWrapper>
      <MainWrapper back={"rgba(203, 203, 203, 0.97)"}>
        this is a box
      </MainWrapper>
      <MainWrapper back={"rgba(222, 222, 222, 0.97)"}>
        this is another box
      </MainWrapper>
      <Wrapper>
        <Title>hello world</Title>
      </Wrapper>
    </div>
  );
};

export default Brand;
