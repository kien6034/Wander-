import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import providerStyle from "./provider.style";
import CustomTypography from "../../components/Typography/typography"
import Rating from '@material-ui/lab/Rating';

let fakeProvider = [
  {
    name: "Ngxba",
    rating: 4.5,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/200",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", urlKey:1
  },
  {
    name: "Ngxba2",
    rating: 3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/201",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", urlKey:2
  },
  {
    name: "Ngxba3",
    rating: 4,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/202",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", urlKey:3
  },
  {
    name: "Ngxba4",
    rating: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/203",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", urlKey:4
  },
];
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
            Meet thousand of our Provider/Contributor
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
        <Grid container spacing={3} style={{ textAlign: "center" }}>
          <Grid item xs={12} sm={4}>
            <h2 className={classes.headerNumber}>1,000</h2>
            <p className={classes.headerText}>Portions of food shared</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 className={classes.headerNumber}>1,000</h2>
            <p className={classes.headerText}>Users</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2 className={classes.headerNumber}>1,000$</h2>
            <p className={classes.headerText}>Donation gived away</p>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
      <br />
      <Container>
      {fakeProvider.map((data) => (
        <>
        <Paper elevation={1} style={{ padding: "10px 10px" }}>
          <Grid container>
            <Grid sm={6} xs={12} item style={{ paddingLeft: "3%" }}>
              <br/>
              <CustomTypography
                txtType='text--bold'
                key={data.id}
                href={data.urlKey}
                style={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgb(8, 160, 92)",
                  fontSize: "1.5rem"
                }}
              >
                {data.name}
              </CustomTypography>
              <br/>
              <br/>
              <Rating name="read-only" value={data.rating} readOnly />
              <p style={{ fontSize: "16px" }}>{data.description}</p>
            </Grid>
            <Grid sm={2} xs={0} item>
            </Grid>
            <Grid sm={4} xs={12} item >
              <img src={data.imageBackground} style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "2%" }} alt={data.name}/>
            </Grid>
          </Grid>
        </Paper>
        <br/>
        </>
      ))}
      </Container>
      <br/>
    </React.Fragment>
  );
}

export default Provider;
