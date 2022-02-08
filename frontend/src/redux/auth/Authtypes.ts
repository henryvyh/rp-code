export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_USER_AUTH = "SET_USER_AUTH";

export interface AuthState {
  isAuth: boolean;
  user?: null;
}

interface SetAuthAction {
  type: any;
  payload: any;
}

export type AuthAction = SetAuthAction;
