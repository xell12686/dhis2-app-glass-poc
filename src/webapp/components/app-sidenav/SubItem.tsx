import React, { useState } from "react";
import { muiTheme, palette } from "../app/themes/dhis2.theme";
import FolderIcon from "@material-ui/icons/Folder";
import { ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export interface SubItemProps {
    color: string;
    name: string;
    items: any[];
}

export const SubItem: React.FC<SubItemProps> = props => {
    const { palette } = muiTheme as any;
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <ListItem button onClick={handleClick}>
                <ListItemIcon style={{ color: palette[props.color].light }}>
                    <FolderIcon color="inherit" />
                </ListItemIcon>
                <ListItemText primary={props.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.items.map((item, i) => (
                        <StyledListItem button key={i} className={classes.nested} color={palette[props.color].light}>
                            <ListItemText primary={item.name} />
                        </StyledListItem>
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
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

const StyledListItem = styled(ListItem)<ListItemProps>`
    &:hover {
        background-color: ${props => props.color || palette.background.hover} !important;
        color: white;
    }
`;
