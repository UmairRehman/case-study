import { combineReducers } from "redux";
import paymentReducer from "./features/dashboard";

export default combineReducers({
  payment: paymentReducer,
});
