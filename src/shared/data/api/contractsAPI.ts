/*
React Toolkit Query
API Slice
*/
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Contract } from "@/types/contracts";

export const contractApi = createApi({
  // Creates an API reducer for us so needs a name
  reducerPath: "contractApi",
  // Where are we getting this data from?
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  // What are the types of data we are getting?
  tagTypes: ["contract"],
  // What endpoints are we going to have?
  endpoints: (builder) => ({
    // Contract is the return type
    // string is the parameter type
    search: builder.query<Contract[], string>({
      query: (q) => `search?market=${q}`,
      // Return the data as a contract tag
      providesTags: (result, error, search) => [{ type: "contract", search }],
    }),
  }),
});
