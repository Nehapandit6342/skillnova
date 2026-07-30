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
export const updateStudentProfile = async ({ formData, profileImage }) => {
  const data = new FormData();
  console.log(formData);
  Object.entries(formData).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (Array.isArray(value)) {
      data.append(key, JSON.stringify(value));
    } else {
      data.append(key, value);
    }
  });

  if (profileImage) {
    data.append("profileImage", profileImage);
  }

  const response = await api.put("/students/profile", data);

  return response.data;
};
