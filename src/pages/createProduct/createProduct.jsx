import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import providerStyle from "./createProduct.style";
import CustomTypography from "../../components/Typography/typography"
import Rating from '@material-ui/lab/Rating';

function Provider() {
  const classes = providerStyle();
  return (
    <React.Fragment key='provider page'>
      <div maxWidth='sm' className={classes.headerContainer}>
        <br />
        <br />
        <br />
        <div className={classes.headerWrap}>
          <h1 className={classes.headerTitle}>
            Create Sharing News Now!
          </h1>
          <br />
          <h1
            style={{
              marginTop: 0,
            }}
            className={classes.headerTitle}
          >
            Join us in making a difference
          </h1>
        </div>
        <br />
        <br />
      </div>
      <br />
      <Container>
            
      </Container>
      <br/>
    </React.Fragment>
  );
}

export default Provider;
