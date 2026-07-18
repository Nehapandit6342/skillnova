import api from "./axios";

// Register

export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};

// Login

export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

// Verify Email

export const verifyEmail = async (data) => {
  const response = await api.post("/auth/verify-email", data);

  return response.data;
};

// Forgot Password

export const forgotPassword = async (data) => {
  const response = await api.post("/auth/forgot-password", data);

  return response.data;
};

// Verify Reset OTP

export const verifyResetOtp = async (data) => {
  const response = await api.post("/auth/verify-reset-otp", data);

  return response.data;
};

// Reset Password

export const resetPassword = async (data) => {
  const response = await api.post("/auth/reset-password", data);

  return response.data;
};
