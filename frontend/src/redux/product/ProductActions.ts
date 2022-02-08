import { toast } from "react-toastify";
import { axiosChallenge } from "../../config/axios";
import { SET_CATEGORIES, SET_PRODUCTS, SET_QUERY } from "./ProductTypes";

export const getProducts = async (dispatch: any, page: any, query: any) => {
  return await axiosChallenge({
    url: "products",
    method: "get",
    params: {
      query,
      page,
    },
  })
    .then(async (data) => {
      const { docs, pagination } = data?.data;
      dispatch({ type: SET_PRODUCTS, payload: docs });
    })
    .catch((e) => {
      toast.error(e?.response?.error);
    });
};

export const getProduct = async (id: any) => {
  return await axiosChallenge({
    url: `products/${id}`,
    method: "get",
  })
    .then(async (data) => {
      return data?.data;
    })
    .catch((e) => {
      toast.error(e?.response?.error);
    });
};

export const getCategories = async (dispatch: any) => {
  return await axiosChallenge({
    url: "category",
    method: "get",
    params: {
      limit: 64,
    },
  })
    .then(async (data) => {
      const { docs, pagination } = data?.data;
      dispatch({ type: SET_CATEGORIES, payload: docs });
    })
    .catch((e) => {
      toast.error(e?.response?.error);
    });
};

export const setQuery = async (dispatch: any, val: String) => {
  return await dispatch({ type: SET_QUERY, payload: val });
};
