import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RegisterEvents from "./Register";
import { Container } from "@material-ui/core";
import MyEvents from "./MyEvents";
import { AuthContext } from "../../../context/Auth/AuthContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>{children}</Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(
  (theme) => (
    console.log(theme),
    {
      root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
      },
    }
  )
);

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const authContext = useContext(AuthContext);

  const { isAuth, user, login } = authContext;

  useEffect(() => {
    login();
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <div className="text-center p-3">
          <Typography variant="h4" style={{ color: "#fff" }}>
            Hello, {user ? user.fname : ""}
          </Typography>
        </div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Register" {...a11yProps(0)} />
            <Tab label="My Events" {...a11yProps(1)} />
            {/* <Tab label="Slots" {...a11yProps(2)} /> */}
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <RegisterEvents />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyEvents />
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          Slots
        </TabPanel> */}
      </Container>
    </div>
  );
}
