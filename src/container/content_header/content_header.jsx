import React from 'react';
import PropTypes from 'prop-types';
import contentHeaderStyle from './content_header.style';
import CustomTypography from '../../components/Typography/typography';
import CustomInput from '../../components/Input/Input';

const slogans = ['Fight waste!', 'Help our country!', 'Save our planet!'];
const slogan = slogans[Math.floor(Math.random() * slogans.length)];

const ContentHeader = (props) =>
{
  const { bgImage } = props;

  const classes = contentHeaderStyle({ bgImage });

  return (
    <div className={classes.root}>
      <div className={classes['home--jumbo']}>
        <h1 className={classes.big}>
          <div className={classes['heading--top']}>
            <CustomTypography fontSize="3.5rem" color="#EF6F6C">
              GIVE &amp; TAKE
            </CustomTypography>
          </div>
          <div className={classes['heading--bot']}>
            <CustomTypography fontSize="3.5rem" color="white">
              {slogan}
            </CustomTypography>
          </div>
        </h1>
        <CustomInput placeholder="Search..." bgColor="white" width="658px" />
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  bgImage: PropTypes.string,
};

ContentHeader.defaultProps = {
  bgImage:
  'https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80?auto=compress,format',
};

export default ContentHeader;
