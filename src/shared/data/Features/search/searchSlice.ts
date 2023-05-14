// Slice of store that manages search
// list of contracts that are currently being searched

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Contract } from "@/types/contracts";

export interface SearchState {
  search: string;
  // Initial set of contracts
  // SERVER CONTRACTS
  // Initial set of contracts that we get during page load
  startupContract: Contract[];
}

// When we do a search, we are just going to use the data stored withing the RTK query, so we don't need to manage that in Redux
const initialState: SearchState = {
  search: "",
  startupContract: [],
};

// Now create the slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  // Reducers: Functions we can call on the store
  reducers: {
    // This is the function that will be called when we do a search
    setSearch(state: SearchState, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    // This is what the page will use to set the initial set of contracts in the store
    setStartupContract(state: SearchState, action: PayloadAction<Contract[]>) {
      state.startupContract = action.payload;
    },
  },
});

// Don't have to define actions, they are automatically generated
export const { setSearch, setStartupContract } = searchSlice.actions;
// Export the reducer for this slice
export default searchSlice.reducer;
