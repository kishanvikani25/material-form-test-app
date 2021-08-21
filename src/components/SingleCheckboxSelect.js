import React from "react";
import {
    Checkbox,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useStyles } from '../utils/commonStyle';

export default function SingleCheckboxSelect() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [selectAll, setSelectAll] = React.useState(false);

    const handleClickParent = () => {
        setOpen(!open);
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
    }

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem key="Signs" button onClick={handleClickParent} disableRipple selected className={classes.listBorderAll}>
                <ListItemText primary="Sign Groups" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List key="SELECT" component="div" disablePadding dense>
                    <ListItem key="ALL" button onClick={handleSelectAll} disableRipple className={classes.listBorder}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={selectAll}
                                tabIndex="-1"
                                disableRipple
                                style={{ color: "#e38120" }}
                                iconstyle={{ fill: 'black' }}
                            />
                        </ListItemIcon>
                        <ListItemText primary="All Signs" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}