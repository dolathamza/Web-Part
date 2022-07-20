import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MainCard from './mainCard';
import ProfileTab from './ProfileTab';
import SecurityTab from './SecurityTab';

// import SocialTab from './social';
function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "30px",
        marginTop: "30px",
        marginBottom: "30px",

        // backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainCard title="Account">
            <div className={classes.root}>
                {/* <AppBar position="static"> */}
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        {/* <Tab label="Social" {...a11yProps(0)} /> */}
                        <Tab label="Profile" {...a11yProps(0)} />
                        <Tab label="Security" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                {/* <TabPanel value={value} index={0}>
            <SocialTab/>
        </TabPanel> */}
                <TabPanel value={value} index={0} >
                    <ProfileTab/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SecurityTab/>
                </TabPanel>


            </div>
        </MainCard>
    );
}

