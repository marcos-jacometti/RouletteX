import styled from "styled-components";

export const Container = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    width: 40vw;
    height: 80vh;
    background-color: #000;
    border-radius: 2vh;

    @media screen and (max-width: 600px){
        width: 94vw;
        height: 90vh;
        background-color: transparent;
    }
`;