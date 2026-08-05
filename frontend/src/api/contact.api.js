/**
 * Send a contact message.
 *
 * NOTE: The backend endpoint is not connected yet. This currently simulates
 * a successful send so the UI is fully workable. To wire up the real
 * backend later:
 *
 *   1. import api from "./axios";
 *   2. replace the body with:  const response = await api.post("/contact", data);
 *                              return response.data;
 *   3. accept the `data` argument again.
 */
export const sendContactMessage = async () => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 900));

  return { success: true, message: "Message sent successfully" };
};
