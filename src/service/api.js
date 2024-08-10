import axios from "axios";

const api = axios.create({
  baseURL: "http://demo9142708.mockable.io/",
  timeout: 10000,
});

export const sendVerificationCode = async () => {
  try {
    const response = await api.get("/send-code");
    return response.data;
  } catch (error) {
    console.error("Error sending verification code:", error);
    return { status: "error", message: "Failed to send code" };
  }
};
