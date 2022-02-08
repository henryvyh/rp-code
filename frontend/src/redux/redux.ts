import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/AuthReducer";
import cartReducer from "./cart/CartReducer";
import productReducer from "./product/ProductReducer";
import uiReducer from "./ui/UiReducer";

const middleWare = [thunk];

const rootReducer = combineReducers({
  authReducer,
  uiReducer,
  productReducer,
  cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleWare));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
