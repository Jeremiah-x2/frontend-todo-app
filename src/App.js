import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "./components/styles/Global.styled";
import Home from "./components/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    bg: darkMode ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
    bgDesktopImg: darkMode
      ? "/images/bg-desktop-dark.jpg"
      : "/images/bg-desktop-light.jpg",
    bgMobileImg: darkMode
      ? "/images/bg-mobile-dark.jpg"
      : "/images/bg-mobile-light.jpg",
    todoBg: darkMode ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)",
    color: darkMode ? "hsl(0, 0%, 98%)" : "hsl(237, 14%, 26%)",
    borderColor: darkMode ? "hsl(237, 14%, 26%)" : "hsl(236, 33%, 92%)",
    bgGradient1: "hsl(192, 100%, 67%)",
    bgGradient2: "hsl(280, 87%, 65%)",
    dkGrayishBlue_2: "hsl(234, 11%, 52%)",
    VdkBlue: "hsl(235, 21%, 11%)",
    brightBlue: "hsl(220, 98%, 61%)",
    lthGrayishBlue_2: "hsl(234, 39%, 85%)",
    vDkGrayishBlue_2: "hsl(233, 14%, 35%)",
    vDkGrayishBlue_3: "hsl(237, 14%, 26%)",
    lthGrayishBlue_2: "hsl(234, 39%, 85%)",
    veryLthGray: "hsl(0, 0%, 98%)",
  };

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div>
        <Home setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
