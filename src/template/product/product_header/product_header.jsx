import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import * as PropTypes from "prop-types";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { Paper, Grid, Avatar } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import CustomTypography from "../../../components/Typography/typography";
import RouteBreadcrumbs from "../../../components/Breadcrumbs/breadcrumbs";
import productHeaderStyle from "./product_header.style";
import SimplePopover from "../../../components/SimplePopover";
import CustomButton from "../../../components/Buttons/button";
import SizePicker from "./size_picker";
// import SizeChart from './size_chart';

const ProductHeader = ({
  routes,
  donator,
  productName,
  sizeQuantity,
  quantity,
  urlKey,
}) => {
  const classes = productHeaderStyle();

  const [isShowingSizePicker, setIsShowingSizePicker] = useState(true);
  const [currentSize, setCurrentSize] = useState("All");

  const theme = useTheme();

  const ActivateButton = () => (
    <CustomButton
      classes={{
        root: classes.activate_button,
        endIcon: classes.end_icon,
      }}
      variant='text'
      endIcon={
        <ExpandMoreIcon
          style={{
            fontSize: 30,
            paddingTop: "1px",
          }}
          htmlColor='#999999'
        />
      }
    >
      {currentSize}
    </CustomButton>
  );

  return (
    <>
      <div className={classes.routes_breadcrumbs_container}>
        {/* Product route */}
        <RouteBreadcrumbs data={routes} />
      </div>

      {/*  Product name */}
      <CustomTypography
        txtStyle='text--heading'
        txtType='text--bold'
        txtComponent='h1'
        fontSize='48px'
        style={{ letterSpacing: "-.5px" }}
      >
        {productName}
      </CustomTypography>

      {/* Product general info */}
      <Grid container spacing={3}>
        <Grid item sm={7} xs={12} style= {{ display: "flex", alignItems: "center" }}>
          <div className={classes.info_container}>
            <Breadcrumbs
              separator='|'
              classes={{
                root: classes.info_breadcrumbs,
                separator: classes.separator,
              }}
              aria-label='breadcrumb'
            >
              <CustomTypography txtType='text--bold' color='#999'>
                <span style={{ marginRight: "3px" }}>Quality:</span>
                <span style={{ color: "#08A05C" }}>New</span>
              </CustomTypography>
              <CustomTypography txtType='text--bold' color='#999'>
                <span style={{ marginRight: "3px" }}>Quantity: </span>
                <span style={{ color: "#08A05C" }}>
                  {quantity.remain}/{quantity.init} remain
                </span>
              </CustomTypography>
              {/* <CustomTypography txtType="text--bold" style={{ color: "#08A05C" }}>
            100% Authentic
          </CustomTypography> */}
            </Breadcrumbs>
          </div>
        </Grid>
        <Grid item sm={5} xs={12}>
          <CustomTypography txtType='text--bold' color='#999'>
            <span style={{ marginRight: "3px"}}>Provider:</span>
          </CustomTypography>
          <br />
          <Grid container spacing={3}>
            <Grid item sm={2}>
              <Avatar
                alt='Demo Avatar'
                src='https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
              />
            </Grid>
            <Grid item sm={9}>
              <CustomTypography
                txtType='text--bold'
                key={donator.id}
                href={donator.id}
                style={{
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "#08A05C",
                }}
              >
                {donator.name}
              </CustomTypography>
              <br/>
              <CustomTypography
                txtType='text--light'
                style={{
                  textDecoration: "none",
                }}
              >
                Rating: 4*
              </CustomTypography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Size picker */}
      <div className={classes.market_summary}>
        <div className={classes.options}>
          <CustomTypography txtType='text--bold' fontSize='16px' color='#999'>
            Donation:
          </CustomTypography>

          <SimplePopover activateComponent={ActivateButton}>
            {/* Size picker and size chart */}
            <Paper square classes={{ root: classes.all_size_container }}>
              {
                // Render size picker
                // isShowingSizePicker && (
                //   <SizePicker
                //     sizeQuantity={sizeQuantity}
                //     sizeChartButtonOnClick={() => setIsShowingSizePicker(false)}
                //     changeCurrentSize={(newSize) => setCurrentSize(newSize)}
                //     currentSize={currentSize}
                //   />
                // )
              }
            </Paper>
          </SimplePopover>
        </div>

        {/* Buy button */}
        <div className={classes.buy_button_container}>
          <CustomButton
            style={{
              padding: "13px 17px",
              minHeight: "70px",
            }}
            buttonSize='btn--large'
            disabled={currentSize === "All"}
          >
            <div className={classes.inner}>
              <Link
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                }}
                to={`/buy/${urlKey}?size=${currentSize}`}
              >
                <CustomTypography
                  txtType='text--light'
                  style={{
                    color: "inherit",
                    lineHeight: "1",
                    fontWeight: "500",
                    fontSize: "30px",
                  }}
                >
                  {currentSize == "All" ? "_$" : currentSize}
                </CustomTypography>

                <div className='divider' />

                <CustomTypography
                  txtType='text--bold'
                  style={{
                    margin: "0",
                    fontSize: "25px",
                    lineHeight: "1",
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  Donate
                </CustomTypography>
              </Link>
            </div>
          </CustomButton>
        </div>
      </div>
    </>
  );
};

ProductHeader.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.any).isRequired,
  // price: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  donator: PropTypes.objectOf(PropTypes.string).isRequired,
  // sizeQuantity: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     size: PropTypes.string,
  //     quantity: PropTypes.number,
  //   })
  // ).isRequired,
  urlKey: PropTypes.string.isRequired,
};

export default ProductHeader;
