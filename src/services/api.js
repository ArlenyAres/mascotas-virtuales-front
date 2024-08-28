// services.js
import axios from "axios";

// Configuración de Axios
const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Interceptor para añadir el token de autenticación en cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("Token being sent:", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Servicios de Autenticación

export const login = async (username, password) => {
  try {
    console.log("Attempting login with:", username, password);
    const response = await api.post("/auth/login", {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data);
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

// Servicios de Mascotas

export const getAllMascotas = async () => {
  try {
    const response = await api.get("/mascotas");
    return response.data;
  } catch (error) {
    console.error("Error fetching mascotas:", error);
    throw error;
  }
};

export const getMascotaById = async (id) => {
  try {
    const response = await api.get(`/mascotas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching mascota:", error);
    throw error;
  }
};

export const createMascota = async (mascotaId, nombre, color) => {
  try {
    console.log("Creating Mascota with:", { mascotaId, nombre, color });
    const response = await api.post("/mascotas/personalizar", {
      mascotaId,
      nombre,
      color,
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
};


export const updateMascota = async (id, mascotaActualizada) => {
  try {
    const response = await api.put(`/mascotas/${id}`, mascotaActualizada);
    return response.data;
  } catch (error) {
    console.error("Error updating mascota:", error);
    throw error;
  }
};

export const deleteMascota = async (id) => {
  try {
    const response = await api.delete(`/mascotas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting mascota:", error);
    throw error;
  }
};
