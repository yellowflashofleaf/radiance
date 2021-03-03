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
            <a target="_blank" href="https://gigindia.in/">
              <img src="/Logos/GigIndia_horiz.png" />
            </a>
          </Grid>

          <Divider />
          {/* <Grid item xs={2}></Grid> */}
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Co-Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.nitorinfotech.com/">
              <img src="/Logos/Nitor Infotech.png" />
            </a>
          </Grid>
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Co-Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.imocha.io/">
              <img src="/Logos/iMocha.png" />
            </a>
          </Grid>

          {/* <Grid item xs={2}></Grid> */}
          <Divider />
          <Grid item md={6} className="sponsor-tile title-sponsor">
            <Typography variant="h4">
              <b>
                <u>Associate Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.sankalpcs.com/">
              <img src="/Logos/Sankalp.png" />
            </a>
          </Grid>
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Associate Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.jamboreeindia.com/">
              <img src="/Logos/Jamboree.png" />
            </a>
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Industrial training Partner </u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.inmovidutech.com/">
              <img src="/Logos/InMovidu.png" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Education Partner </u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.geeksforgeeks.org/">
              <img src="/Logos/GFG.png" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Cloud Partner</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.digitalocean.com/">
              <img src="/Logos/DO_Logo_Horizontal_Blue.png" />
            </a>
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Platform Partner</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.codechef.com/">
              <img src="/Logos/Codechef _ Unacademy.png" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Electroquest Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.highwaynorth.com/">
              <img src="/Logos/Highway North.png" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Certificate Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://givemycertificate.com/">
              <img src="/Logos/Give My Certificate.png" />
            </a>
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
