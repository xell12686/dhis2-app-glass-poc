import React from "react";
import styled from "styled-components";
import { palette } from "../app/themes/dhis2.theme";

export const Card = ({ title, color = palette.background.hover, children }: CardProps) => {
    return (
        <Wrapper color={color}>
            {title &&
                <div className="header">{title}</div>
            }
            <div className="content">{children}</div>
        </Wrapper>
    );
};

export interface CardProps {
    title?: string;
    color?: string;
    children: React.ReactNode;
}

const Wrapper = styled.div<{ color: string }>`
    .header {
        background-color: ${props => props.color};
    }
`;
