import React from "react";
import Grid from "@material-ui/core/Grid";
import customInstruction from "./instruction.style";
import CustomTypography from "../../components/Typography/typography";

function Instruction() {
  const classes = customInstruction();
  return (
    <div className={classes.instruction}>
      <div className={classes.container}>
        <CustomTypography
          txtComponent='h2'
          txtType='text--bold'
          txtStyle='txt--heading'
          className={classes.headline}
        >
          The Powers In Your Hand
        </CustomTypography>
        <Grid container spacing={2} justify='center'>
          <Grid item md={6} xs={12}>
            <div className={classes.block}>
              <h2 className={classes.headline2}>Provide ProjectX</h2>
            </div>
            <div className={classes.description}>
              We don’t determine the price, you do. As a live marketplace,
              ProjectX empowers you to Donation and Place Order at real-time that
              reflect the current demand.
            </div>
            <CustomTypography
              className={classes.link}
              href='/'
              color='#08a05c'
              txtComponent='a'
              txtStyle='text--link'
              txtType='text--bold'
            >
              Learn More About Provide
              <span className={classes.plus}>+++++</span>
            </CustomTypography>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className={classes.block}>
              <h2 className={classes.headline2}>Give On ProjectX</h2>
              </div>
              <div className={classes.description}>
              We don’t determine the price, you do. As a live marketplace,
              ProjectX empowers you to Donation and Place Order at real-time that
              reflect the current demand.
              </div>
              <CustomTypography
                className={classes.link}
                href='/'
                color='#08a05c'
                txtComponent='a'
                txtStyle='text--link'
                txtType='text--bold'
              >
                Learn More About Giving
                <span className={classes.plus}>+++++</span>
              </CustomTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Instruction;
