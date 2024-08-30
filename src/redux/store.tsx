import { Middleware, configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import rootReducer from "./rootReducer";

const addLoggerMiddleware = (
  getDefaultMiddleware: typeof configureStore.prototype.middleware
): Middleware[] => {
  return getDefaultMiddleware().concat(reduxLogger);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: addLoggerMiddleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
