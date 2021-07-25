import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_REQUEST_FAILURE,
  FETCH_PRODUCT_REQUEST_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_REQUEST_FAILURE,
  FETCH_PRODUCTS_REQUEST_SUCCESS,
  UPDATE_PRODUCT_DATA,
} from "../types/productType";

const initialProductsState = {
  loading: false,
  productsData: [],
  error: "",
};

export const productsReducer = (state = initialProductsState, action) =>
{
  switch (action.type)
  {
    case UPDATE_PRODUCT_DATA:
      return {
        ...state,
        productsData: action.payload,
      };
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productsData: [],
      };
    default:
      return state;
  }
};

const sampleImage = [
  "https://upload.wikimedia.org/wikipedia/commons/9/9d/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour_edit.jpg",
  "https://lh3.googleusercontent.com/proxy/6e8JiwJUNPuT7Binq4pOZc4o5CInN5d-n513wevm_OtIkDgjTYitdrSEmw7baJOAxLavHruleBl8RC3V7CLTJTD-o8tBnJuJdtyfPiDILm-jEOYKSu0",
  "http://suckhoedoisong.vn/Images/thanhloan/2016/06/14/6-tac-dung-bat-ngo-cua-kiwi.jpg",
  "https://icdn.dantri.com.vn/FaA3gEccccccccccccos/Image/2013/10/kiwi-81013-94dfa.jpg",
];

const initialProductState = {
  loading: false,
  productData: {
    tags: [],
    _id: "",
    productName: "",
    imageurl: sampleImage,
    detail: [
      {
        _id: "",
        name: "",
        value: "",
      },
    ],
    description: "",
    quantity:{
      init: 0,
      remain: 0,
    },
    donator:{
      _id: "",
      name: "",
    },
    rating: 0,
    location: {
      city: "",
      district: "",
    },
    dateUpdated: "",
  },
  error: "",
};

export const productReducer = (state = initialProductState, action) =>
{
  switch (action.type)
  {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_REQUEST_SUCCESS:
    {
      return {
        ...state,
        productData: action.payload,
        loading: false,
        error: "",
      };
    }
    case FETCH_PRODUCT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productsData: {
          tags: [],
          _id: "",
          productName: "",
          imageurl: sampleImage,
          detail: [
            {
              _id: "",
              name: "",
              value: "",
            },
          ],
          description: "",
          quantity:{
            init: 0,
            remain: 0,
          },
          donator:{
            _id: "",
            name: "",
          },
          rating: 0,
          location: {
            city: "",
            district: "",
          },
          dateUpdated: "",
        },
      };
    default:
      return state;
  }
};
