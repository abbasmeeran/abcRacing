import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import BookmarkIcon from "@material-ui/icons/Bookmark";
import DriverIcon from '../common/icons/drivers';
import RaceIcon from '../common/icons/races';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component={Link}
            {...props}
        />
    );
}

const tabRoutes = ['/drivers', '/races', '/bookmarks'];

const ABCTabs = withRouter(function (props) {
    const { t } = useTranslation();
    let selectedTab = tabRoutes.indexOf(props.location.pathname);
    const [value, setValue] = React.useState(selectedTab === -1 ? 0 : selectedTab);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Tabs value={value} onChange={handleChange} aria-label={t('simple tabs example')}>
            <LinkTab icon={<DriverIcon />} label={t('Drivers')} to="/drivers" {...a11yProps(0)} />
            <LinkTab icon={<RaceIcon />} label={t('Races')} to="/races" {...a11yProps(1)} />
            <LinkTab icon={<BookmarkIcon />} label={t('Bookmarks')} to="/bookmarks" {...a11yProps(2)} />
        </Tabs>
    );
});

export default ABCTabs;
