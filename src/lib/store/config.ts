import {
  configureStore,
  combineReducers,
  type Reducer,
  type EnhancedStore,
} from "@reduxjs/toolkit";
import { readable, type Readable } from "svelte/store";
import appReducer from "./reducers/appReducer";

interface RootState {
  app: ReturnType<typeof appReducer>;
}

const rootReducer: Reducer<RootState> = combineReducers({
  app: appReducer,
});

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

const bindReduxStore = <T extends EnhancedStore<any, any, any>>(
  store: T
): {
  subscribe: Readable<ReturnType<T["getState"]>>["subscribe"];
  dispatch: T["dispatch"];
} => {
  const state = readable(store.getState(), (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState());
    });
    return unsubscribe;
  });

  return {
    subscribe: state.subscribe,
    dispatch: store.dispatch,
  };
};

export const store = bindReduxStore(reduxStore);
