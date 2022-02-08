import { Dispatch } from "redux";
import { AuthAction, SET_IS_AUTH } from "./Authtypes";

// Set isAuth
export const setIsAuth = (auth: boolean): AuthAction => {
  return {
    type: SET_IS_AUTH,
    payload: auth,
  };
};
export const setActionAuth = (
  dispatch: Dispatch,
  type: any,
  payload: any
): AuthAction => {
  return dispatch({
    type,
    payload,
  });
};
