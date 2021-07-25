import React from "react";
import PropTypes from 'prop-types';
import tabStyle from './tab.style';

const CTab = (props) =>
{
  const {
    cType,
    ...rest
  } = props;

  const classes = tabStyle(rest);

  return (
    <h1 className={classes.root}>
      {cType}
    </h1>
  );
};

CTab.propTypes = {
  cType: PropTypes.string,
};

CTab.defaultProps = {
  cType: 'New/Used',
};

export default CTab;
