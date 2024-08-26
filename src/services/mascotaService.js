import api from "./api";

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
    const response = await api.post("/mascotas/personalizar", {
      mascotaId,
      nombre,
      color,
    });
    console.log(response.data); 

    return response.data;
  } catch (error) {
    console.error("Error creating mascota:", error);
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
