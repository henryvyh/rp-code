import { UiAction, SET_NAV_COLLAPSE, SET_NAV_HIDE } from "./UiTypes";

export const setNavCollapse = (collapse: boolean): UiAction => {
  return {
    type: SET_NAV_COLLAPSE,
    payload: collapse,
  };
};
export const setNavHide = (hide: boolean): UiAction => {
  return {
    type: SET_NAV_HIDE,
    payload: hide,
  };
};
