import { api } from "../config/axios/axiosConfig";

export const getCatagory = async (key,page,size) => {
  try {
    const response = await api.get(`/categories/active?${key && `keyword=${key}`}${page && `&page=${page}`}${size && `&size=${size}`}`);
    console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};
export const getProduct = async () => {
  try {
    const response = await api.get(`/bouquets/active`);
    console.log("response",response.data)
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/bouquets/${id}`);
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};
export const getProductFlowerById = async (flowerId ) => {
  try {
    console.log('flowerId ', flowerId )
    const response = await api.get(`/flowers/${flowerId }`);
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};
export const putProductFlowerById = async (id,data) => {
  try {
    const response = await api.put(`/bouquets/${id}`,data);
    return response.data;
  } catch (error) {
    console.error("get catagory error:", error);
    throw error;
  }
};