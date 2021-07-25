import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import providerStyle from "./provider.style";
import CustomTypography from "../../components/Typography/typography"
import Rating from '@material-ui/lab/Rating';

let fakeProvider = [
  {
    name: "Thanh Tran",
    rating: 4.5,
    location: {
      city: "Hanoi",
      district: "BaDinh",
      nation: "Vietnam"
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/200",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", 
    urlKey: "/homepage/403940fc8fbf8ec0642f596f8019581b"
  },
  {
    name: "Nguyen Ba Tung Lam",
    rating: 3,
    location: {
      city: "Hanoi",
      district: "BaDinh",
      nation: "Vietnam"
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae eos fuga consequatur doloremque, voluptates eligendi voluptatem vitae ratione amet odit corrupti, cumque maxime, voluptatum doloribus temporibus corporis libero. Placeat, debitis.",
    imageBackground: "https://picsum.photos/300/201",
    avatar:
      "https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png", urlKey: "/homepage/07a532afe149dd653aaf68d6cc40d563"
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
                  fontSize: "1.5rem",
                }}
              >
                {data.name}
              </CustomTypography>
              {/* <p>{data.location.city}, {data.location.district}, {data.location.nation}</p> */}
              <CustomTypography
              color="rgba(0, 0, 0, 0.5);"
              txtType="text--light"
              txtColor="textSecondary"
              fontSize="14px"
              txtComponent="p"
              style = {{ margin: "10px 0" }}
            >
              {data.location.city}, {data.location.district}, {data.location.nation}
            </CustomTypography>
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
