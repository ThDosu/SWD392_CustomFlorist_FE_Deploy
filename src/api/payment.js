import { api } from "../config/axios/axiosConfig";

export const postVnPay = async (vnpayData) => {
  try {
    const response = await api.post(`/payment/vn-pay`,vnpayData);
    console.log('response', response)
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};