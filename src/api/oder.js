import { api } from "../config/axios/axiosConfig";

export const postOrder = async (data) => {
  try {
    const response = await api.post(`/orders`,data);
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};