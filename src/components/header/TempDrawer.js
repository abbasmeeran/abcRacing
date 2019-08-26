import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RaceIcon from '../common/icons/races';
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DriverIcon from '../common/icons/drivers';
import { ListItemIcon } from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 250
    },
    paper: {
        top: 65
    }
});

export default function TemporaryDrawer() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    });

    const toggleDrawer = (open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, open });
    };

    const links = [
        {
            label: t("Drivers"),
            to: "/drivers",
            icon: () => <DriverIcon />
        },
        {
            label: t("Races"),
            to: "/races",
            icon: () => <RaceIcon />

        },
        {
            label: t("Bookmarks"),
            to: "/bookmarks",
            icon: () => <BookmarkIcon />
        }
    ];

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {links.map((link, index) => (
                    <ListItem button key={link.label}>
                        <ListItemIcon>{link.icon()}</ListItemIcon>
                        <Link to={link.to}> <ListItemText primary={link.label} /></Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <div style={{ top: 65 }}>
                <Drawer open={state.open} onClose={toggleDrawer(false)} >
                    {sideList()}
                </Drawer>
            </div>
        </div>
    );
}