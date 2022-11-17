import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContent } from "../../components/app-content/AppContent";
import { AppFooter } from "../../components/app-footer/AppFooter";
import { AppSideNav } from "../../components/app-sidenav/AppSideNav";
import { Card, CardGrid } from "../../components/card-grid/CardGrid";

export const LandingPage: React.FC = () => {
    return (
        <Wrapper>
            <AppSideNav />
            <main>
                <AppContent />
                <AppFooter />
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    padding: 30px 40px;
    main {
        min-height: calc(100vh - 100px);
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
    }
`;
