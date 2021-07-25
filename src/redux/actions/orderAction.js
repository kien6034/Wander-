import axios from "axios";
import { backEndLink } from "../../config";
import {
  ORDER_REQUEST_FAILURE,
  ORDER_REQUEST_FETCH,
  ORDER_REQUEST_SUCCESS,
} from "../types/orderType";

const FetchOrdersRequest = () => ({
  type: ORDER_REQUEST_FETCH,
});

const FetchOrdersRequestSuccess = (orders) => ({
  type: ORDER_REQUEST_SUCCESS,
  payload: orders,
});

const FetchOrdersRequestFailure = (error) => ({
  type: ORDER_REQUEST_FAILURE,
  payload: error,
});

export const createOrder = async (
  donatorId,
  receiverId,
  productId,
  productName,
  orderDate,
  shipDate,
  quantity,
  donate,
  status
) => {
  const res = await axios.post(`${backEndLink}/api/order/createOrder`, {
    donatorId,
    receiverId,
    productId,
    productName,
    orderDate,
    shipDate,
    quantity,
    donate,
    status,
  });
  console.log(donatorId,
    receiverId,
    productId,
    productName,
    orderDate,
    shipDate,
    quantity,
    donate,
    status)
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Cannot create product", res);
};

export const FetchOrderData = (userId, token) => async (dispatch) => {
  dispatch(FetchOrdersRequest());

  try {
    const res = await axios.get(`${backEndLink}/api/order/${userId}`, {
      params: {
        type: "all",
      },
    });
    console.log(res)

    if (res.status === 200) {
      // Pass data to order state only if response array is not empty
      if (res.data.length) {
        dispatch(FetchOrdersRequestSuccess(res.data));
      } else {
        dispatch(
          FetchOrdersRequestSuccess([
            {
              ownerId: "",
              price: null,
              productId: "",
              productName: "No data",
              purchaseDate: null,
              status: "",
              urlKey: "",
            },
          ])
        );
      }
    } else {
      //   throw new Error("Cannot Sign In", res.data.error);
      dispatch(FetchOrdersRequestFailure(res.data));
    }
  } catch (error) {
    dispatch(FetchOrdersRequestFailure(error));
  }
};
