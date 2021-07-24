/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import HelpIcon from '@material-ui/icons/Help';
import { nanoid } from 'nanoid';
import CustomCard from '../card/fcard';
import CustomTypography from '../../components/Typography/typography';

const fakeData = [
  {
    _id: nanoid(),
    productName: 'Pizza',
    price: 100,
    numberSold: 0,
    imageurl:
      'https://goido.net/storage/files/pizza-hut-turns-comeback-expert-0.jpg?auto=compress&q=90&dpr=2&updated_at=1611084516&fit=clip&fm=webp&ixlib=react-9.0.3&w=1946',
  },
  {
    _id: nanoid(),
    productName: 'Product Title',
    price: 100,
    numberSold: 0,
    imageurl:
      'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
  },
  {
    _id: nanoid(),
    productName: 'Product Title',
    price: 100,
    numberSold: 0,
    imageurl:
      'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
  },
  {
    _id: nanoid(),
    productName: 'Product Title',
    price: 100,
    numberSold: 0,
    imageurl:
      'https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg',
  },
];

const TYPES = ['product', 'brand'];

const CardContainer = ({
  data,
  showCategory,
  type,
  title,
}) => (
  <React.Fragment key="product grid">
    {showCategory && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '16px 0',
        }}
      >
          <span style={{ display: 'flex' }}>
            <CustomTypography
              txtStyle="text--category"
              txtType="text--medium"
              txtComponent="h3"
              fontSize="18px"
              txtColor="textPrimary"
            >
              {title}
            </CustomTypography>
            {type === TYPES[0] && <HelpIcon style={{ marginLeft: '10px' }} />}
          </span>
        <CustomTypography
          txtStyle="text--link"
          //   txtType='text--medium'
          href="/brand/sneakers"
          txtComponent="a"
          fontSize="14px"
          txtColor="textPrimary"
        >
          See all
        </CustomTypography>
      </div>
    )}
    <Grid container spacing={3}>
      {type === TYPES[0]

        // Product
        ? data.map((doc) => (
            // eslint-disable-next-line no-underscore-dangle
            <Grid key={doc._id} item xs={6} lg={3} md={6}>
              <CustomCard data={doc} type={type} />
            </Grid>
          ))

        // Brand
        : data.map((doc) => (
          <Grid key={doc.id} item xs={4}>
            <CustomCard data={doc} type={type} />
          </Grid>
        ))}

    </Grid>
  </React.Fragment>
);

CardContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      productName: PropTypes.string,
      price: PropTypes.number,
      numberSold: PropTypes.number,
      imageurl: PropTypes.string,
    }),
  ),
  type: PropTypes.oneOf(TYPES),
  title: PropTypes.string,
  showCategory: PropTypes.bool,
};

CardContainer.defaultProps = {
  data: fakeData,
  type: TYPES[0],
  showCategory: true,
  title: '',
};

export default CardContainer;
