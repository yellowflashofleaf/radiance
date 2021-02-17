import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';

/* App.js -> Grid item -> </Header> brings you here*/
const Header = () => {
    return (
        <AppBar style={{backgroundColor: "#1A1A1D", position: "fixed"}}>
            <Toolbar>
                <Typography
                    style={{color: "rgba(13, 105, 224, 0.904)", fontSize: "30px", fontStyle: "Segoe UI"}}> PULZION
                    21 </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;