import React from "react";
import PropTypes from 'prop-types';
import ProviderThumbStyle from './provider_thumb.style';
import './provider_toggle.css';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const ProviderThumb = (props) =>
{
  const {
    providerName,
    rate,
    imageURL,
    p_id,
    title,
    ...rest
  } = props;

  const classes = ProviderThumbStyle(rest);
  const purl = "homepage/" + p_id;
  
  const toggle_id =title + p_id;

  console.log({p_id})

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <img className={classes.image} src={imageURL} alt="provider" />
        <div className={classes.info}>
          <div className={classes.providerName} style={{ overflow: "hidden"}}>
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
        <div className={classes.dots} onClick={()=> openSmallNav(toggle_id)}>
          <div className={classes.dot} />
          <div className={classes.dot} />
          <div className={classes.dot} />  
        </div>
        
        <Paper id = {toggle_id} className={classes.paper}>
        <div className={classes.ppelement}>
          <Link to={purl} style={{ textDecoration: "none", color: 'inherit' }}>
            View our shop
          </Link> 
          </div>
          <div className={classes.ppelement}>
            Follow us
        </div>


          </Paper>
      </div>
      
    </div>


  );
};

function openSmallNav(toggle_id) {
  document.getElementById(toggle_id).classList.toggle('show');
}

ProviderThumb.propTypes = {
  imageURL: PropTypes.string,
  providerName: PropTypes.string,
  rate: PropTypes.number,
  p_id: PropTypes.number,
  title: PropTypes.string,
};

ProviderThumb.defaultProps = {
  imageURL: 'https://cdn0.iconfinder.com/data/icons/profession-and-occupation-icons/110/avatar_occupation_profile_cook_kitchener_flunkey_food-512.png',
  providerName: "Wander",
  rate: 5,
  p_id: 1,
  title: 'none',
};

export default ProviderThumb;
