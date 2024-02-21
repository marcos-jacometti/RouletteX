import React from "react";
import { Container, Content } from "./styles";
import PredictionCalculator from "../roulette";

export default function Body(){
    return (
        <Container>
            <Content>
                <PredictionCalculator />
            </Content>
        </Container>
    );
};