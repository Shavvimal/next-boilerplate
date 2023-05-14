"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="btn-sm text-white bg-orange-500 hover:bg-plum-500 rounded-md "
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
