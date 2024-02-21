import React from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import Body from "../../components/body";

export default function Main(){
    return (
        <Container>
            <Header />
            <Body />
        </Container>
    );
}