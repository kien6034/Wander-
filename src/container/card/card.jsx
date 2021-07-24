import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CustomTypography from "../../components/Typography/typography";
import cardStyle from "./card.style";
import CTab from "../../components/Tab/tab";
import ProviderThumb from "../provider_thumb/provider_thumb";

const TYPES = ["product", "brand"];

const CustomCard = (props) =>
{
  const { data, type, ...rest } = props;
  const classes = cardStyle(rest);
  const urlKey = type === TYPES[0] ? `/product/${data.urlKey}` : `./${data.urlKey}`;

  return (
    <Link to={urlKey} style={{ textDecoration: "none" }}>
      {type === TYPES[0] ? (
        <Card {...rest} className={classes.root}>
          <CardMedia
            className={classes.media}
            image={data.imageurl}
            title={data.productName}
            style={{ backgroundSize: "contain" }}
          />
          <CTab ctype="New" color="red" bgColor="#fafdff" />
          <CardContent className={classes.cardContent}>
            <CustomTypography
              // txtStyle="text--title"
              txtType="text--light"
              fontSize="15px"
              txtComponent="h3"
              style={{
                // height: "38px",
                overflow: "hidden",
                whiteSpace: "pre-wrap",
                margin: "14px 0",
              }}
            >
              <span style = {{ color: 'red' }}>{data.quantity.remain}/{data.quantity.init}</span> products left
            </CustomTypography>
            <CustomTypography
              color="rgba(0, 0, 0, 0.5);"
              txtType="text--light"
              txtColor="textSecondary"
              fontSize="14px"
              txtComponent="p"
            >
              Lunch in Hanoi
            </CustomTypography>
            <CustomTypography
              txtStyle="text--category"
              txtType="text--bold"
              fontSize="22px"
              txtComponent="h3"
            >
              {data.productName}
            </CustomTypography>
            <CustomTypography
              color="rgba(0, 0, 0, 0.5);"
              txtType="text--light"
              txtColor="textSecondary"
              fontSize="14px"
              txtComponent="p"
            >
              {data.numberSold}
              {" Sold"}
            </CustomTypography>
            <ProviderThumb height="2.3rem" />
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.root} style={{ position: "relative" }}>
          <CardMedia
            className={classes.media}
            image={data.imageurl}
            title={data.productName}
          />
          <CardMedia
            image={data.imgBrandSrc}
            className={classes.smallImg}
            title={data.productName}
          />
        </Card>
      )}
    </Link>
  );
};

CustomCard.propTypes = {
  data: PropTypes.shape({
    productName: PropTypes.string,
    price: PropTypes.number,
    numberSold: PropTypes.number,
    urlKey: PropTypes.string,
    imageurl: PropTypes.string,
    imgBrandSrc: PropTypes.string,
  }),
  type: PropTypes.oneOf(TYPES),
};

CustomCard.defaultProps = {
  data: {
    productName: "Product Title",
    price: 100,
    numberSold: 0,
    imageurl:
      "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
    imgBrandSrc: "",
  },
  type: TYPES[0],
};

export default CustomCard;
