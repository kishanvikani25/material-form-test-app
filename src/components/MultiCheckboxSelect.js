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
import { multiSelectData } from '../utils/constants';
import { useStyles } from '../utils/commonStyle';

export default function MultiCheckboxSelect() {
    const classes = useStyles();
    const [dataList, setDataList] = React.useState(multiSelectData);
    const [open, setOpen] = React.useState(true);
    const [parentOpen, setParentOpen] = React.useState([]);
    const [selectAll, setSelectAll] = React.useState(false);

    const handleClick = (text) => {
        let newList = [];
        if (parentOpen.indexOf(text) !== -1) {
            newList = parentOpen.filter((data) => data !== text);
        } else {
            newList = [...parentOpen];
            newList.push(text);
        }
        setParentOpen(newList);
    };

    const handleClickParent = () => {
        setOpen(!open);
    };

    const handleParentCheckbox = (event, text) => {
        event.stopPropagation();
        const data = [...dataList];
        const updatedList = data.map((parent) => {
            if (parent.label === text) {
                parent.checked = !parent.checked;
                parent.children.map((child) => {
                    child.checked = parent.checked;
                    return child;
                });
            }
            return parent;
        });
        setSelectAll(updatedList.every(parent => parent.checked));
        setDataList(updatedList);
    };

    const handleChildCheckbox = (event, childText, parentText) => {
        event.stopPropagation();
        const data = [...dataList];
        const updatedList = data.map((parent) => {
            if (parent.label === parentText) {
                parent.children.map((child) => {
                    if (child.label === childText) {
                        child.checked = !child.checked;
                    }
                    return child;
                });
            }
            parent.checked = parent.children.every((child) => child.checked);
            return parent;
        });
        setSelectAll(updatedList.every(parent => parent.checked));
        setDataList(updatedList);
    };

    const handleSelectAll = () => {
        const updatedList = dataList.map((parent) => {
            parent.checked = !selectAll;
            parent.children.map((child) => {
                child.checked = !selectAll;
                return child;
            });
            return parent;
        });
        setDataList(updatedList);
        setSelectAll(!selectAll);
    }
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem key="Signs" button onClick={handleClickParent} disableRipple selected className={classes.listBorderAll}>
                <ListItemText primary="Signs" />
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
                        <ListItemText primary="SELECT ALL" />
                    </ListItem>
                    {dataList.map((data) => {
                        const { label, children, checked } = data;
                        const collapse = data.children.length > 0;
                        const isOpen = parentOpen.indexOf(data.label) !== -1;
                        return (
                            <div key={label}>
                                <ListItem button disableRipple id={label} className={classes.listBorder}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked}
                                            tabIndex="-1"
                                            disableRipple
                                            onChange={(e) => handleParentCheckbox(e, label)}
                                            style={{ color: "#e38120" }}
                                            iconstyle={{ fill: 'black' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={label}
                                        id={label}
                                        onClick={() => (collapse ? handleClick(label) : null)}
                                    />
                                    {collapse ? isOpen ? <ExpandLess /> : <ExpandMore /> : null}
                                </ListItem>
                                {collapse && (
                                    <Collapse key={`${label}-collapse`} in={isOpen} timeout="auto" unmountOnExit>
                                        <List key={`${label}-nested`} component="div" disablePadding dense>
                                            {children.map((child) => (
                                                <ListItem
                                                    key={child.label}
                                                    button
                                                    className={classes.nested}
                                                    onChange={(e) => handleChildCheckbox(e, child.label, label)}
                                                >
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            checked={child.checked}
                                                            tabIndex="-1"
                                                            disableRipple
                                                            style={{ color: "#e38120" }}
                                                            iconstyle={{ fill: 'black' }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={child.label} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Collapse>
                                )}
                            </div>
                        );
                    })}
                </List>
            </Collapse>
        </List>
    );
}