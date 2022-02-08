import { IProduct } from "../../interfaces/IProduct";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_QUERY = "SET_QUERY";

export interface ProductState {
  products: Array<IProduct>;
  paginate: any;
  categories: Array<any>;
  query: String;
}

interface SetProductAction {
  type: any;
  payload: any;
}

export type ProductAction = SetProductAction;
