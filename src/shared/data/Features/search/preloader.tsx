/*
We need to move server side state from the server to the client for dynamic pages.
To do this we need a client side component that takes the startupContracts & sets the store on initialisation of the client 
How can we move this data?
Approach:
use client components, anything that comes as properties is serialised from the server to the client. 
In Page if we had a component that had the property of startupContracts, it would be serialised to the client.
It can preload the store with these contracts.
Basically, we channel the data through the props of this preloader 
preload the store state of the client this way
*/

"use client";

import { useRef } from "react";
import { store } from "@/data/store";
import { setStartupContract } from "./searchSlice";
import { Contract } from "@/types/contracts";

function Preloader({ contracts }: { contracts: Contract[] }) {
  // Only want to do this once, so we can track it using useRef
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupContract(contracts));
    loaded.current = true;
  }
  // React component so it needs to return something
  return null;
}

export default Preloader;
