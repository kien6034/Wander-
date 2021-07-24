import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import customAboutGrid from "./about.style";
import CustomTypography from "../../components/Typography/typography";

function AboutGrid()
{
  const classes = customAboutGrid();
  return (
    <Container>
      <Grid container spacing={3} className={classes.container}>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="shoe"
            src="https://image.flaticon.com/icons/png/128/498/498280.png"
          />
          <h3>100% Verified Authentic</h3>
          <div>
            <p>
              <span>
                Every item sold goes through our proprietary multi-step
                verification process with our team of expert authenticators.
              </span>
            </p>
          </div>
          <CustomTypography
            className={classes.learnmore}
            href="https://stockx.com/about/authentication/"
            color="white"
            txtComponent="a"
            txtStyle="text--link"
            txtType="text--light"
          >
            <span>Learn more</span>
            <span> +++++</span>
          </CustomTypography>
        </Grid>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="transparent"
            src="https://image.flaticon.com/icons/png/128/2618/2618479.png"
          />
          <h3>Transparent Donation</h3>
          <div>
            <p>
              <span>
                Our real-time marketplace works just like the stock market –
                allowing you to buy and sell the most coveted items at their
                true market price.
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="global"
            src="https://image.flaticon.com/icons/png/128/814/814587.png"
          />
          <h3>Global Access</h3>
          <div>
            <p>
              <span>
                Whether it’s pre-release, regionally limited, or “sold out” –
                our
              </span>
              <span>millions of</span>
              <span>
                {" "}
                customers from over 200+ countries allow you to easily secure
                those hard-to-find, coveted items.
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="No BS"
            src="https://image.flaticon.com/icons/png/128/1128/1128191.png"
          />
          <h3>No BS</h3>
          <div>
            <p>
              <span>
                No chargebacks, no taking photos, no writing catchy
                descriptions, and no dealing with rogue buyers or sellers. We
                handle everything to make sure you can buy and sell with
                complete confidence.
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="Secure"
            src="https://image.flaticon.com/icons/png/128/508/508281.png"
          />
          <h3>Secure</h3>
          <div>
            <p>
              <span>
                Preserving the integrity of our marketplace means staying a step
                ahead. Our security and fraud systems, powered by our world
                class partners, have your personal information covered 24/7.
              </span>
            </p>
          </div>
        </Grid>
        <Grid item md={4} xs={6} className={classes.grid}>
          <img
            className={classes.image}
            alt="shoe"
            src="https://image.flaticon.com/icons/png/128/3094/3094824.png"
          />
          <h3>Here For You</h3>
          <div>
            <p>
              Thanks to our
              <CustomTypography
                href="https://help.stockx.com/"
                txtComponent="a"
                // txtStyle="text--link"
                txtType="text--light"
                color="green"
              >
                {" "}
                Help Center
                {" "}
              </CustomTypography>
              Chatbot, and dedicated global-support staff, you can be sure that
              we are always available to answer any and every question regarding
              our marketplace.
            </p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
export default AboutGrid;
