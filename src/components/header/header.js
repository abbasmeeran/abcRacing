import React from "react";
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import LogoIcon from '../common/icons/logo';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import TempDrawer from './TempDrawer';
import ABCTabs from './ABCTabs';
import { useTranslation } from "react-i18next";


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        marginLeft: theme.spacing(1),
    },
    logout: {
        paddingLeft: theme.spacing(73),
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <TempDrawer />
                <Link to="/"><LogoIcon className={classes.icon} /></Link>
                <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    {t('ABC Racing')}
                </Typography>
                <ABCTabs handleChange={props.selectTab} />
                <Grid className={classes.logout}>
                    <Link to="/login">Logout</Link>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;