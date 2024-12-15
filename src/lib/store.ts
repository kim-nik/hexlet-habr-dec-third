import { configureStore } from "@reduxjs/toolkit";
import documentsReducer from "./features/docs/documentsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      documents: documentsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
