/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import productStyle from './index.style';
import ProductHeader from './product_header/product_header';
import ProductMedia from './product_media/product_media';
import ProductInfo from './product_info/product_info';
import RelatedProduct from './related_product/related_product';
import { FetchProduct } from '../../redux/actions/productActions';
import FetchRelatedProducts from '../../redux/actions/relatedProducAction';
import Shadow from '../../components/Shadow/shadow';

const sample_product = {
  productData: {
    tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
    _id: "6073c30784658c55e8ab46b7",
    productName: "Cereals",
    quantity: {
      init: 10,
      remain: 9
    },
    location: {
      district: "Ba đình",
      city: "Hà Nội",
      nation: "Việt Nam"
    },
    imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
    donator: { name: "Ngxba", id: "abc", urlKey: "/"},
    detail: [
      {
        _id: "a",
        name: "NSX",
        value: "2021-07-23",
      },
      {
        _id: "hsd",
        name: "HSD",
        value: "2021-07-24",
      },
      {
        _id: "c",
        name: "Company",
        value: "Pepsi",
      },
    ],
    description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
    dateUpdated: "20210722",
  }
}

let sample_relatedProducts = { productsData: [{
  tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
  _id: "6073c30784658c55e8ab46b7",
  productName: "Cereals",
  quantity: {
    init: 10,
    remain: 9
  },
  location: {
    district: "Ba đình",
    city: "Hà Nội",
    nation: "Việt Nam"
  },
  imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
  donator: { name: "Ngxba", id: "abc", urlKey: "/"},
  detail: [
    {
      _id: "a",
      name: "NSX",
      value: "2021-07-23",
    },
    {
      _id: "hsd",
      name: "HSD",
      value: "2021-07-24",
    },
    {
      _id: "c",
      name: "Company",
      value: "Pepsi",
    },
  ],
  description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
  dateUpdated: "20210722",
}, {
  tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
  _id: "6073c30784658c55e8ab46b7",
  productName: "Cereals",
  quantity: {
    init: 10,
    remain: 9
  },
  location: {
    district: "Ba đình",
    city: "Hà Nội",
    nation: "Việt Nam"
  },
  imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
  donator: { name: "Ngxba", id: "abc", urlKey: "/"},
  detail: [
    {
      _id: "a",
      name: "NSX",
      value: "2021-07-23",
    },
    {
      _id: "hsd",
      name: "HSD",
      value: "2021-07-24",
    },
    {
      _id: "c",
      name: "Company",
      value: "Pepsi",
    },
  ],
  description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
  dateUpdated: "20210722",
}, {
  tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
  _id: "6073c30784658c55e8ab46b7",
  productName: "Cereals",
  quantity: {
    init: 10,
    remain: 9
  },
  location: {
    district: "Ba đình",
    city: "Hà Nội",
    nation: "Việt Nam"
  },
  imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
  donator: { name: "Ngxba", id: "abc", urlKey: "/"},
  detail: [
    {
      _id: "a",
      name: "NSX",
      value: "2021-07-23",
    },
    {
      _id: "hsd",
      name: "HSD",
      value: "2021-07-24",
    },
    {
      _id: "c",
      name: "Company",
      value: "Pepsi",
    },
  ],
  description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
  dateUpdated: "20210722",
}, {
  tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
  _id: "6073c30784658c55e8ab46b7",
  productName: "Cereals",
  quantity: {
    init: 10,
    remain: 9
  },
  location: {
    district: "Ba đình",
    city: "Hà Nội",
    nation: "Việt Nam"
  },
  imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
  donator: { name: "Ngxba", id: "abc", urlKey: "/"},
  detail: [
    {
      _id: "a",
      name: "NSX",
      value: "2021-07-23",
    },
    {
      _id: "hsd",
      name: "HSD",
      value: "2021-07-24",
    },
    {
      _id: "c",
      name: "Company",
      value: "Pepsi",
    },
  ],
  description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
  dateUpdated: "20210722",
}, {
  tags: ["foot", "not food", "dry food", "dairy food", "buffet", "fruit", "vegetable", "drinks"],
  _id: "6073c30784658c55e8ab46b7",
  productName: "Cereals",
  quantity: {
    init: 10,
    remain: 9
  },
  location: {
    district: "Ba đình",
    city: "Hà Nội",
    nation: "Việt Nam"
  },
  imageurl: "https://article.innovadatabase.com/articleimgs/article_images/637393930391956160Quick-breakfast-cereals-676066314_3840x5760.jpeg",
  donator: { name: "Ngxba", id: "abc", urlKey: "/"},
  detail: [
    {
      _id: "a",
      name: "NSX",
      value: "2021-07-23",
    },
    {
      _id: "hsd",
      name: "HSD",
      value: "2021-07-24",
    },
    {
      _id: "c",
      name: "Company",
      value: "Pepsi",
    },
  ],
  description: "This is a wonderful food, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  sizeQuantity: [{ _id: "random", size: "0$", quantity: 0 }, { _id: "random", size: "5$", quantity: 0 }, { _id: "random", size: "10$", quantity: 2 }, { _id: "random", size: "20$", quantity: 2 }],
  dateUpdated: "20210722",
}]}

const Product = ({ match }) =>
{
  const classes = productStyle();
  const { params } = match;

  const productState = useSelector((state) => {
    // if (state.productState.error == "")
    //   return state.productState.productData
    // else 
      return sample_product
  });
  const relatedProductsState = useSelector((state) => {
    // if (state.productsState.error == "")
    //   return state.relatedProductsState
    // else 
      return sample_relatedProducts
    });

  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(FetchProduct(params.urlKey));
  }, [params.urlKey]);

  const { tags } = productState.productData;

  const data = {
    category: tags[0],
    tag: tags[1],
    tag2: tags[2],
    tag3: tags[3],
  };

  useEffect(() =>
  {
    dispatch(FetchRelatedProducts(0, 15, data));
  }, [tags]);

  // Generate data for breadcrumbs
  const textRoutes = [...tags.slice(0, tags.length - 5)];

  const linkRoutes = textRoutes.map((text, index) =>
  {
    let href = "/marketplace";
    for (let i = 0; i <= index; i += 1)
    {
      href += `/${textRoutes[i]}`;
    }

    return {
      href,
      text,
    };
  });

  // Add product name to last
  linkRoutes.push({
    href: `/product/${params.urlKey}`,
    text: productState.productData.productName,
  });

  // Render Circular Progress while fetching data
  if (productState.loading)
  {
    return (
      <div className={classes.center}>
        <CircularProgress size={80} />
      </div>
    );
  }
  return (
    <div className={classes.page_container}>
      {/* Shadow below navbar */}
      <Shadow />

      <Container
        classes={{
          root: classes.container,
        }}
      >
        {/* Product Header: Pick size, price */}
        <ProductHeader
          routes={linkRoutes}
          productName={productState.productData.productName}
          donator={productState.productData.donator}
          sizeQuantity={productState.productData.sizeQuantity}
          quantity={productState.productData.quantity}
          urlKey={params.urlKey}
        />
        {/* Product media */}
        <ProductMedia
          imageURL={productState.productData.imageurl}
          productName={productState.productData.productName}
        />
        {/* Product info */}
        <ProductInfo
          detail={productState.productData.detail}
          description={productState.productData.description}
          location= {location}
        />
        {/* Related products */}
        {relatedProductsState.loading ? (
          <CircularProgress className={classes.center} size={40} />
        ) : (
          <RelatedProduct
            relatedProductList={relatedProductsState.productsData}
          />
        )}
      </Container>
    </div>
  );
};

export default Product;
