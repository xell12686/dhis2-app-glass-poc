import React from "react";
import styled from "styled-components";

export const AppFooter: React.FC = () => {
    return (
        <Wrapper>
            <p>&copy; {new Date().getFullYear()} Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: transparent;
    text-align: center;
    margin: 30px auto;
`;
