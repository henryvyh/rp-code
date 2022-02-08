import { toast } from "react-toastify";
import { CART_TYPE } from "./CartTypes";

export const addProductCart = async (dispatch: any, obj: any) => {
  await dispatch({ type: CART_TYPE.ADD_PRODUCT, payload: obj });
  return toast.success(`Producto "${obj?.name}" agregado a la cesta.`);
};
export const removeProductCart = async (dispatch: any, obj: any) => {
  await dispatch({ type: CART_TYPE.REMOVE_PRODUCT, payload: obj });
  return toast.error(`Producto "${obj?.name}" eliminado a la cesta.`);
};
export const cleanCart = async (dispatch: any, checkout: any) => {
  await dispatch({ type: CART_TYPE.CLEAN_CART, payload: null });
  return checkout
    ? toast.success(`Compra completada.`)
    : toast.error(`Carrito de compras limpiado.`);
};
