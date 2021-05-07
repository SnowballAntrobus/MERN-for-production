import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

export const createWishlist = (payload) => api.post("/wishlist", payload);
export const getWishlistById = (id) => api.get(`/wishlist/${id}`);
export const updateWishlistById = async (firebase, id, payload) => {
  const token = await firebase.auth.currentUser.getIdToken();
  return api.put(`/wishlist/${id}`, payload, {
    headers: { authorization: `Bearer ${token}` },
  });
};

const WishlistApi = {
  createWishlist,
  getWishlistById,
  updateWishlistById,
};

export default WishlistApi;