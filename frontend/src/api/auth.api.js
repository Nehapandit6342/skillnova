import api from "./axios";


// ================= REGISTER =================

export const registerUser = async (data) => {

  const response =
    await api.post(
      "/auth/register",
      data
    );

  return response.data;

};




// ================= LOGIN =================

export const loginUser = async (data) => {

  const response =
    await api.post(
      "/auth/login",
      data
    );

  return response.data;

};




// ================= FORGOT PASSWORD =================

export const forgotPassword = async (data) => {

  const response =
    await api.post(
      "/auth/forgot-password",
      data
    );

  return response.data;

};




// ================= VERIFY RESET OTP =================

export const verifyResetOtp = async (data) => {

  const response =
    await api.post(
      "/auth/verify-reset-otp",
      data
    );

  return response.data;

};




// ================= RESET PASSWORD =================

export const resetPassword = async (data) => {

  const response =
    await api.post(
      "/auth/reset-password",
      data
    );

  return response.data;

};




// ================= CHANGE PASSWORD (AUTHENTICATED) =================

export const changePassword = async (data) => {

  const response =
    await api.post(
      "/auth/change-password",
      data
    );

  return response.data;

};




// ================= DELETE ACCOUNT (AUTHENTICATED) =================

export const deleteAccount = async () => {

  const response =
    await api.delete(
      "/auth/account"
    );

  return response.data;

};