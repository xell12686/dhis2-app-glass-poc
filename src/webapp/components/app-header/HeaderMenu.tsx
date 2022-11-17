import { Button, FormControl, FormHelperText, InputLabel, Menu, MenuItem, Select } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RoomIcon from "@material-ui/icons/Room";
import { muiTheme } from "../app/themes/dhis2.theme";

export const HeaderMenu: React.FC = () => {
    const [country, setCountry] = React.useState("spain");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCountry(event.target.value as string);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Wrapper>
            <SelectWrapper>
                <RoomIcon color="primary" />
                <Select
                    value={country}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select Country" }}
                >
                    <MenuItem value={"spain"}>Spain</MenuItem>
                    <MenuItem value={"france"}>France</MenuItem>
                    <MenuItem value={"brazil"}>Brazil</MenuItem>
                </Select>
            </SelectWrapper>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                User Profile
                <ArrowDropDownIcon />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin: 0 0 0 auto;
    gap: 15px;
    align-items: center;
    & > button {
        text-transform: none;
        font-weight: 400;
        height: 35px;
        padding: 0;
        &:focus,
        &:hover {
            background-color: transparent;
        }
    }
`;

const SelectWrapper = styled(FormControl)`
    &.MuiFormControl-root {
        height: 35px;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        > div {
            &:before,
            &:after {
                content: none;
            }
        }
    }
    .MuiInput-root {
        font-weight: 400;
        font-size: 14px;
        height: 100%;
    }
    .MuiSelect-select:focus {
        background-color: transparent;
    }
`;
