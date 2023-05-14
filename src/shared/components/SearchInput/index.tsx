"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/data/store";
import { setSearch } from "@/data/Features/search/searchSlice";
import ContractTable from "@/components/ContractTable";
import { contractApi } from "@/data/api/contractsAPI";
import { Contract } from "@/types/contracts";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  // Allows us to set values in the store
  const dispatch = useAppDispatch();
  // Allows us to get values from the store
  const search = useAppSelector((state) => state.search.search);
  const startupContract = useAppSelector(
    (state) => state.search.startupContract
  );

  const data = useAppSelector(
    (state) =>
      state.contractApi.queries[`search("${search}")`]?.data as Contract[]
  );

  useEffect(() => {
    dispatch(contractApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div className="w-full">
      <h4 className="mx-auto text-center">Redux Search</h4>
      <input
        type="text"
        className=" form-input my-4 block w-full appearance-none px-3 py-2 "
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <ContractTable
        contracts={search.length ? data ?? startupContract : startupContract}
      />
    </div>
  );
};

export default SearchInput;
