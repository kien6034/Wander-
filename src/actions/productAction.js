import axios from "axios";
import { backEndLink } from "../config";

export const getAllProduct = async () =>
{
  const res = await axios.get(`${backEndLink}/api/product/`);
  if (res.status === 200)
  {
    return res.data;
  }
  throw new Error("Server error", res);
};

export const getProductData = async () =>
{
  const res = await axios.get(`${backEndLink}/api/product/`);
  if (res.status === 200)
  {
    return res.data;
  }
  throw new Error("Server error", res);
};

export const getOwnProduct = async (id) =>
{
  const res = await axios.get(`${backEndLink}/api/product/owner/${id}`);
  if (res.status === 200)
  {
    return res.data;
  }
  throw new Error("Server error", res);
};
export const createProduct = async (productData) =>
{
  const res = await axios.post(`${backEndLink}/api/product/createProduct`, {
    productData
  });
  try {
    if (res.status === 200)
    {
      return {
        ...res.data,
        success: true
      };
    } else {
      return {
        success: false
      }
    }
  } catch(error) {

  }
};
