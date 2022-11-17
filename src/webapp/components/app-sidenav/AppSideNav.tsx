import React from "react";
import styled from "styled-components";
import { muiTheme } from "../app/themes/dhis2.theme";
import StarIcon from "@material-ui/icons/Star";
import FolderIcon from "@material-ui/icons/Folder";
import data from "./mock-data.json";
import { ListSubheader, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { Title, ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { MenuCard } from "../card-grid/MenuCard";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SubItem } from "./SubItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const AppSideNav: React.FC = () => {
    const { palette } = muiTheme as any;
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    console.log("palette: ", palette);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Wrapper>
            <ListWrap>
                <ListItem button>
                    <ListItemIcon style={{ color: palette.quaternary.light }}>
                        <StarIcon />
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
    padding: 10px 15px;
    min-width: 250px;
`;

const ListWrap = styled(List)`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const LogoutButton = styled(ListItem)`
    &.MuiListItem-root {
        max-width: 160px;
        margin: 20px auto 0;
    }
`;
