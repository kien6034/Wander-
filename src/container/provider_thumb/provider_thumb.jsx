import React from "react";
import PropTypes from 'prop-types';
import ProviderThumbStyle from './provider_thumb.style';

const ProviderThumb = (props) =>
{
  const {
    providerName,
    rate,
    imageURL,
    ...rest
  } = props;

  const classes = ProviderThumbStyle(rest);

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img className={classes.image} src={imageURL} alt="provider" />
        <div className={classes.info}>
          <div className={classes.providerName}>
            {providerName}
          </div>
          <div className={classes.rate}>
            <div className={classes.rvalue}>
              {rate}
            </div>
            <img className={classes.starImg} src="https://www.pngfind.com/pngs/m/4-44880_image-result-for-star-vector-rating-star-single.png" alt="rating star" />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />  
      </div>
    </div>
  );
};

ProviderThumb.propTypes = {
  imageURL: PropTypes.string,
  providerName: PropTypes.string,
  rate: PropTypes.number,
};

ProviderThumb.defaultProps = {
  imageURL: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
  providerName: "Wander",
  rate: 4.3,
};

export default ProviderThumb;
