import React from "react";
import styled from "styled-components";
import logoWho from "./logo-who.png";
import logoGlass from "./logo-glass.png";
import { HeaderMenu } from "./HeaderMenu";
import { muiTheme } from "../app/themes/dhis2.theme";

export const AppHeader: React.FC = () => {
    return (
        <Wrapper>
            <HamburgerButton>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>
            <Logos>
                <img src={logoGlass} alt="GLASS" />
                <img src={logoWho} alt="WHO" />
            </Logos>
            <HeaderMenu />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    padding: 15px 40px;
    box-shadow: 0px 8px 7px -3px rgba(0, 0, 0, 0.1);
    z-index: 2;
    position: relative;
`;

const HamburgerButton = styled.button`
    display: flex;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    flex-direction: column;
    gap: 2px;
    width: 20px;
    span {
        width: 100%;
        height: 2px;
        background-color: ${muiTheme.palette.primary.main};
    }
`;

const Logos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin-left: 30px;
    img {
        display: block;
        width: auto;
    }
    img:nth-child(1) {
        height: 55px;
    }
    img:nth-child(2) {
        max-height: 45px;
    }
`;
