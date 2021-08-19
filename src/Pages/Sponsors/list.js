import { Container, Divider, Grid, Typography } from "@material-ui/core";
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
            <a target="_blank" href="https://gigindia.in/" rel="noreferrer">
              <img src="/Logos/GigIndia_horiz.png" alt="Logo" />
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
            <a
              target="_blank"
              href="https://www.nitorinfotech.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Nitor Infotech.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Co-Sponsor</u>
              </b>
            </Typography>
            <a target="_blank" href="https://www.imocha.io/" rel="noreferrer">
              <img src="/Logos/iMocha.png" alt="Logo" />
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
            <a
              target="_blank"
              href="https://www.sankalpcs.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Sankalp.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={6} className="sponsor-tile title-sponsor ">
            <Typography variant="h4">
              <b>
                <u>Associate Sponsor</u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.jamboreeindia.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Jamboree.png" alt="Logo" />
            </a>
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Industrial training Partner </u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.inmovidutech.com/"
              rel="noreferrer"
            >
              <img src="/Logos/InMovidu.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Education Partner </u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/"
              rel="noreferrer"
            >
              <img src="/Logos/GFG.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Cloud Partner</u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.digitalocean.com/"
              rel="noreferrer"
            >
              <img src="/Logos/DO_Logo_Horizontal_Blue.png" alt="Logo" />
            </a>
          </Grid>
          <Divider />
          <Grid item md={4} className="sponsor-tile title-sponsor">
            <Typography variant="h5">
              <b>
                <u>Platform Partner</u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.codechef.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Codechef _ Unacademy.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Electroquest Sponsor</u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://www.highwaynorth.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Highway North.png" alt="Logo" />
            </a>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor ">
            <Typography variant="h5">
              <b>
                <u>Certificate Sponsor</u>
              </b>
            </Typography>
            <a
              target="_blank"
              href="https://givemycertificate.com/"
              rel="noreferrer"
            >
              <img src="/Logos/Give My Certificate.png" alt="Logo" />
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

            <img src="/Logos/Niwant Andh Mukta Vikasalay.png" alt="Logo" />

            <Typography variant="p">Niwant Andh Mukta Vikasalay</Typography>
          </Grid>
          <Grid item md={4} className="sponsor-tile title-sponsor "></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SponsorList;
