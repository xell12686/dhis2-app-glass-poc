import React from "react";
import styled from "styled-components";
import { palette } from "../app/themes/dhis2.theme";
import { Card } from "../cards/Card";

export const AppContent: React.FC = () => {
    return (
        <Wrapper>
            <Card>
                <p>Content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </Card>
            {/* <Card title="TEST title" color={palette.secondary.light}>
                <p>Content here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </Card> */}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: transparent;
    text-align: center;
    margin: 30px auto;
`;
