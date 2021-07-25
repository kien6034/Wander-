import axios from "axios";
import { backEndLink } from "../config";

export const getOwnOrders = async (userId, type) => {
  const res = await axios.get(`${backEndLink}/api/order/${userId}`, {
    params: {
      type,
    },
  });
  if (res.status === 200) {
    return res.data;
  }
  throw new Error("Server error", res);
};
