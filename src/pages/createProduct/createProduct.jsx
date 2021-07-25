import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import createProductStyle from "./createProduct.style";
import CreateProductForm from "./createProductForm";

function Provider() {
  const classes = createProductStyle();
  return (
    <React.Fragment key='provider page'>
      <div maxWidth='sm' className={classes.headerContainer}>
        <br />
        <br />
        <br />
        <div className={classes.headerWrap}>
          <h1 className={classes.headerTitle}>Create Sharing News Now!</h1>
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
        <Paper style={{padding: "20px"}}>
          <CreateProductForm />
        </Paper>
      </Container>
      <br />
    </React.Fragment>
  );
}

export default Provider;
