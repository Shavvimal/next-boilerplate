import Link from "next/link";
import Logo from "@/assets/logo.svg";
import SearchInput from "@/components/SearchInput";

import DataProvider from "@/data/provider";
import { store } from "@/data/store";
import { setStartupContract } from "@/data/Features/search/searchSlice";
import Preloader from "@/data/Features/search/preloader";

export default async function Home() {
  // Add the contracts to the SetStartupContract
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupContract(data));

  return (
    <div className="flex bg-white dark:bg-black py-10">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Logo className="w-48 h-48 mb-10" alt="Quadra" />
        <div className="text-center max-w-screen-sm mb-10">
          <h1>Quadra Platform in Next.js</h1>
          <p className="text-stone-400 mt-5">
            This is the{" "}
            <a
              href="https://www.quadra.trade/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-stone-200 transition-all"
            >
              Quadra
            </a>{" "}
            platform using{" "}
            <a
              href="https://next-auth.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-stone-200 transition-all"
            >
              Next-js
            </a>{" "}
            with Prisma ORM for dev.
          </p>
        </div>

        <div className="flex space-x-3">
          <Link
            href="/dashboard"
            className="text-orange-500 underline hover:text-stone-200 transition-all"
          >
            Dashboard
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://dev.azure.com/novaduverauk/NDUK%20Quadra/_git/quadra-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-stone-200 transition-all"
          >
            Azure DevOps
          </a>
        </div>
        <div className="glass-div mt-10 flex flex-col align-center justify-center">
          {/* <ReduxButton /> */}
          <Preloader contracts={data} />
          <DataProvider>
            <SearchInput />
          </DataProvider>
        </div>
      </div>
    </div>
  );
}
