import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    color: #fff;

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        font-size: 2vh;
    }

    input {
        display: flex;
        text-align: center;
        height: 5vh;
        font-size: 2vh;
        background: none;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
    }

    .LastNumbers {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: red;
        height: 20vh;
    }

    button {
        width: 20vw;
        height: 4vh;
        background-color: #04AA6D;
        color: #fff;
        border-radius: 1vh;
        font-size: 2vh;
        margin-top: 0.5vh;

        &:hover {
            cursor: pointer;
            background-color: #008856;
        }

        @media screen and (max-width: 600px){
        width: 50vw;
    }
    }

    .Predictions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 20vh;

        p {
            font-size: 2vh;
        }

        .Title {
            color: #008856;
        }
    }
`;