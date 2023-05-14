import { configureStore } from "@reduxjs/toolkit";
// Reducers for the store
import searchReducer from "@/data/Features/search/searchSlice";
// API Slices
import { contractApi } from "@/data/api/contractsAPI";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    contractApi: contractApi.reducer,
  },
  // Add the middleware for the API
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(contractApi.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

// React redux is typed but doesn't know schema for the store or the dispatcher
// Total state of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//   Property 'contractApi' is missing in type '{ counter: CounterState; search: SearchState; }' but required in type 'RootState<{ search: QueryDefinition<str
