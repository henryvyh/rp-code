import { StorageApp } from "../../utils/StorageApp";
import { AuthState, AuthAction, SET_IS_AUTH, SET_USER_AUTH } from "./Authtypes";

const initialState: AuthState = {
  isAuth: StorageApp.getAuth(),
  user: StorageApp.getUser(),
};

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case SET_USER_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
