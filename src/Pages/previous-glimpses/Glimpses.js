import React from "react";
import {
  Grid,
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core";
import Header from "./header";
import Content from "./Content";
import "./Glimpses.css";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  gutterBottom: {
    marginBottom: "0.6em",
  },
});

function Glimpses() {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{zIndex: 10}}>
      <Grid item container>
        <div className="heroText">
          <Grid item xs={0} sm={2} />
          <Grid item xs={12}>
            <Typography
              className={classes.text}
              variant="h3"
              style={{
                fontFamily: "Segoe UI",
                textAlign: "center",
              }}
              gutterBottom
            >
              Glimpses of previous years
            </Typography>
          </Grid>
          <Grid item xs={0} sm={2} />
        </div>
      </Grid>

      <Grid item container>
        <div className="underline"></div>
      </Grid>

      <Grid item container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
    </Grid>
  );
}

export default Glimpses;
