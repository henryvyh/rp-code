export const SET_NAV_COLLAPSE = "SET_NAV_COLLAPSE";
export const SET_NAV_HIDE = "SET_NAV_HIDE";

export interface UiState {
  navCollapse: boolean;
  navHide: boolean;
}

interface SetUiAction {
  type: any;
  payload: any;
}

export type UiAction = SetUiAction;
