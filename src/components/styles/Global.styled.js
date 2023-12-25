import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* font-size: 18px; */
    font-family: 'Josefin Sans', sans-serif;
    /* width: auto !important; */
}
body {
    background-image: url(${(p) => p.theme.bgDesktopImg});
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: ${(p) => p.theme.bg};
    padding-inline: 2rem;
    padding-bottom: 5rem;
    @media screen and (max-width: 800px) {
        background-image: url(${(p) => p.theme.bgMobileImg});
        background-repeat: no-repeat;
        background-color: ${(p) => p.theme.bg};
        padding: 1rem;
        padding-bottom: 5rem;
        background-size: 100%;
    }
}
`;
