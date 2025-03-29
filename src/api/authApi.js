import { api } from "../config/axios/axiosConfig";

export const signup = async (userData) => {
  try {
    const response = await api.post("/users/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post("/users/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const verifyAccount = async (code) => {
  try {
    const response = await api.get(`/users/verify?code=${code}`);
    return response.data;
  } catch (error) {
    console.error("Verify account error:", error);
    throw error;
  }
};

export const getGoogleAuthUrl = async () => {
  try {
    const response = await api.get("/auth/url");
    return response.data;
  } catch (error) {
    console.error("Get Google Auth URL error:", error);
    throw error;
  }
};

export const googleAuthCallback = async (code) => {
  try {
    const response = await api.get(`/auth/callback?code=${code}`);
    return response.data;
  } catch (error) {
    console.error("Google Auth Callback error:", error);
    throw error;
  }
};

export const googleAuthSuccess = async () => {
  try {
    const response = await api.get(`/auth/success`);
    return response.data;
  } catch (error) {
    console.error("Google Auth Success error:", error);
    throw error;
  }
};

export const getDetailUser = async (id) => {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Google Auth Success error:", error);
    throw error;
  }
};
