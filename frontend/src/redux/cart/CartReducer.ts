import { StorageApp } from "../../utils/StorageApp";
import { CART_TYPE } from "./CartTypes";

const initialState = {
  cart: StorageApp.getCart(),
};
export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case CART_TYPE.CLEAN_CART:
      StorageApp.setItem({ cart: [] });
      return {
        ...state,
        cart: [],
      };
    case CART_TYPE.ADD_PRODUCT:
      const newCart = [action.payload, ...state.cart];
      StorageApp.setItem({ cart: newCart });
      return {
        ...state,
        cart: newCart,
      };
    case CART_TYPE.REMOVE_PRODUCT:
      const delCart = state.cart.filter(
        (e: any) => e?._id !== action.payload._id
      );
      StorageApp.setItem({ cart: delCart });
      return {
        ...state,
        cart: delCart,
      };
    default:
      return state;
  }
}
