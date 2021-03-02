import { Container, Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const SponsorList = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ textAlign: "center !important" }}>
        <Grid container spacing={8}>
          <Grid item md={12} className="sponsor-tile title-sponsor">
            <Typography variant="h4">
              <b>
                <u>Title Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/GigIndia_horiz.png" />
          </Grid>
          <Divider />
          <Grid item xs={2}></Grid>
          <Grid item md={8} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Co-Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/iMocha.png" />
          </Grid>
          <Grid item xs={2}></Grid>
          <Divider />
          <Grid item md={6} className="sponsor-tile title-sponsor">
            <Typography variant="h4">
              <b>
                <u>Associate Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/Sankalp.png" />
          </Grid>
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Associate Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/Jamboree.png" />
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Industrial training Partner </u>
              </b>
            </Typography>
            <img src="/Logos/InMovidu.png" />
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Education Partner </u>
              </b>
            </Typography>
            <img src="/Logos/GFG.png" />
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Cloud Partner</u>
              </b>
            </Typography>
            <img src="/Logos/DO_Logo_Horizontal_Blue.png" />
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Platform Partner</u>
              </b>
            </Typography>
            <img src="/Logos/Codechef _ Unacademy.png" />
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Electroquest Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/Highway North.png" />
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Certificate Sponsor</u>
              </b>
            </Typography>
            <img src="/Logos/Give My Certificate.png" />
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor"></Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Social Works Partner</u>
              </b>
            </Typography>
            <img src="/Logos/Niwant Andh Mukta Vikasalay.png" />
            <Typography variant="p">Niwant Andh Mukta Vikasalay</Typography>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor "></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SponsorList;
