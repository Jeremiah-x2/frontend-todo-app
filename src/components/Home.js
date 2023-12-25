import React from "react";
import Header from "./Header";
import Todo from "./Todo";
import { styled } from "styled-components";

const Home = ({ setDarkMode, darkMode }) => {
  return (
    <HomeStyle>
      <Header setDarkMode={setDarkMode} />
      <Container>
        <Todo darkMode={darkMode} />
      </Container>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  width: 100%;
  /* border: 5px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    /* width: 100%; */
    margin: 0;
    align-items: normal;
  }
`;

const Container = styled.section`
  /* background-color: red; */
  /* z-index: 20; */
  /* border: 5px solid red; */
  /* width: 100%; */
  flex-grow: 1;
`;
