import api from "./axios";

/**
 * Get logged-in student profile
 */
export const getStudentProfile = async () => {
  const response = await api.get("/students/profile");
  return response.data;
};

/**
 * Update logged-in student profile
 */
export const updateStudentProfile = async (profileData) => {
  const response = await api.put("/students/profile", profileData);

  return response.data;
};
