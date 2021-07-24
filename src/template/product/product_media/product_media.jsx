// import React from 'react';
// import * as PropTypes from 'prop-types';
// import productMediaStyle from './product_media.style';
//
// const ProductMedia = ({ imageURL, productName }) =>
// {
//   const classes = productMediaStyle();
//
//   return (
//     <div className={classes.root}>
//       <div className={classes.image_container}>
//         <div className="inner">
//           <img className="image" src={imageURL} alt={productNameroductName} />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// ProductMedia.propTypes = {
//   productName: PropTypes.string.isRequired,
//   imageURL: PropTypes.string.isRequired,
// };
//
// export default ProductMedia;

import React from "react";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import productMediaStyle from "./product_media.style";

// eslint-disable-next-line no-unused-vars
const ProductMedia = ({ imageURL, productName }) =>
{
  const classes = productMediaStyle();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7} md={6}>
          <img className={classes.img} src={imageURL[0]} alt={productName} />
        </Grid>

        <Grid item xs={12} lg={5} md={6}>
          <Grid item xs={12}>
            <img className={classes.img} src={imageURL[1]} alt={productName} />
          </Grid>

          <Grid container spacing={2} style={{ marginTop: "4px" }}>
            <Grid item xs={12} lg={6} md={6}>
              <img className={classes.img} src={imageURL[2]} alt={productName} />
            </Grid>

            <Grid item xs={12} lg={6} md={6}>
              <img className={classes.img} src={imageURL[3]} alt={productName} />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

ProductMedia.propTypes = {
  productName: PropTypes.string.isRequired,
  imageURL: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductMedia;
