import React from "react";
import { styled } from "styled-components";

const Header = ({ setDarkMode, darkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <HeaderStyle>
      <span>TODO</span>
      <button onClick={toggleDarkMode}>
        <img
          src={`${darkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}`}
          alt=""
        />
      </button>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 4rem 3rem;
  span {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 5px;
    color: #fff;
  }
  button {
    outline: none;
    border: none;
    background: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-block: 2rem;
  }
`;
