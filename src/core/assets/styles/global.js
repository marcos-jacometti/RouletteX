import { createGlobalStyle } from "styled-components";
import SpaceMonoBold from '../fonts/SpaceMono-Bold.ttf';
import imgMobile from '../images/mobile.png';
import imgDesktop from '../images/desktop.png';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Space Mono';
        src: ${`url(${SpaceMonoBold}) format('truetype')`};
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        transition: 0.1s;
    }

    body {
        display: flex;
        font-family: 'Space Mono';
        background-color: rgb(60, 60, 60);
        background-image: url(${imgDesktop});
        background-repeat: no-repeat;
        background-size: cover;

        @media screen and (max-width: 600px){
            background-image: url(${imgMobile});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

`;