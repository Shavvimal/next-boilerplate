"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/LoadingDots/";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(({ ok, error }) => {
            setLoading(false);
            if (!error) {
              router.push("/dashboard");
            } else {
              toast.error(error);
            }
          });
        } else {
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Account created! Redirecting to login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              toast.error(await res.text());
            }
          });
        }
      }}
      className="flex flex-col space-y-4 bg-gray-50 dark:bg-dark-900 px-4 py-8 sm:px-16"
    >
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="user@quadra.co.uk"
          autoComplete="email"
          required
          className=" form-input mt-1 block w-full appearance-none px-3 py-2 "
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="form-input mt-1 block w-full appearance-none px-3 py-2 "
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed bg-plum-500"
            : "text-white bg-orange-500 hover:bg-plum-500"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all btn`}
      >
        {loading ? (
          <LoadingDots color="#fff" />
        ) : (
          <p className="text-white">
            {type === "login" ? "Sign In" : "Sign Up"}
          </p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-orange-600 dark:text-orange-500"
          >
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-orange-600 dark:text-orange-500"
          >
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
