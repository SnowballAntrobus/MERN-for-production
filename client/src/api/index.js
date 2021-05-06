import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

export const insertItem = async (firebase, payload) => {
  const token = await firebase.auth.currentUser.getIdToken();
  return api.post("/item", payload, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const updateItemById = async (firebase, id, payload) => {
  const token = await firebase.auth.currentUser.getIdToken();
  return api.put(`/item/${id}`, payload, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const deleteItemById = async (firebase, id) => {
  const token = await firebase.auth.currentUser.getIdToken();
  return api.delete(`/item/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};
export const getAllItems = () => api.get(`/items`);
export const getItemById = (id) => api.get(`/item/${id}`);

export const createWishlist = (payload) => api.post("/wishlist", payload);
export const getWishlistById = (id) => api.get(`/wishlist/${id}`);
export const updateWishlistById = async (firebase, id, payload) => {
  const token = await firebase.auth.currentUser.getIdToken();
  return api.put(`/wishlist/${id}`, payload, {
    headers: { authorization: `Bearer ${token}` },
  });
};

const apis = {
  insertItem,
  getAllItems,
  updateItemById,
  deleteItemById,
  getItemById,
  createWishlist,
  getWishlistById,
  updateWishlistById,
};

export default apis;
