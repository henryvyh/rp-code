import { StorageApp } from "../../utils/StorageApp";
import { UiState, UiAction, SET_NAV_COLLAPSE, SET_NAV_HIDE } from "./UiTypes";

const initialState: UiState = {
  navCollapse: StorageApp.getNavCollapse(),
  navHide: true,
};

const uiReducer = (state = initialState, action: UiAction) => {
  switch (action.type) {
    case SET_NAV_COLLAPSE:
      return {
        ...state,
        navCollapse: action.payload,
      };
    case SET_NAV_HIDE:
      return {
        ...state,
        navHide: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
