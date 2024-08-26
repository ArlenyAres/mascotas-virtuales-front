import api from "./api";

export const login = async (username, password) => {
  try {
    console.log("Attempting login with:", username, password); // Verifica qué se está enviando
    const response = await api.post("/auth/login", { username, password });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data); // Verifica si hay más detalles en la respuesta
      console.error("Error status:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post("/auth/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!getToken(); // Devuelve true si hay un token, de lo contrario false
};
