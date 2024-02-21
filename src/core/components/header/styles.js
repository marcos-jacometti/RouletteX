import styled from "styled-components";
import img from "../../assets/images/logo.png";

export const Container = styled.header`
    display: flex;
    width: 100vw;
    height: 10vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;