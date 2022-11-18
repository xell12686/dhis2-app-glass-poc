import React from "react";
import styled from "styled-components";
import { colors, muiTheme } from "../app/themes/dhis2.theme";
import data from "./mock-data.json";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SubItem } from "./SubItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const AppSideNav: React.FC = () => {
    const { palette } = muiTheme as any;
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Wrapper>
            <ListWrap>
                <ListItem button className="home-button">
                    <ListItemIcon style={{ color: palette.quaternary.light }}>
                        <StarGradient />
                    </ListItemIcon>
                    <ListItemText primary={data.pageTitle} />
                </ListItem>
                {data.navItems.map((item, i) => (
                    <SubItem name={item.name} color={item.color} items={item.subItems} key={i} />
                ))}
                <LogoutButton button>
                    <ListItemIcon style={{ color: palette.divider }}>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </LogoutButton>
            </ListWrap>
        </Wrapper>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    })
);

const Wrapper = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 8px 7px -3px rgba(0, 0, 0, 0.1);
    padding: 0px 10px;
    min-width: 250px;
`;

const StarGradient = styled.div`
    width: 23px;
    height: 23px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background: ${colors.gradientLightBg};
`;

const ListWrap = styled(List)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .MuiListItem-button {
        border-radius: 8px;
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .home-button {
        text-transform: uppercase;
        &:hover {
            background: ${colors.gradientLightBg};
            color: white;
            > div > div {
                background: white;
            }
        }
    }
`;

const LogoutButton = styled(ListItem)`
    &.MuiListItem-root {
        max-width: 160px;
        margin: 15px auto 0 40px;
    }
`;
