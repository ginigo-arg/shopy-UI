"use client";

import { useFormState } from "react-dom";
import createUser from "./create-user";
import Link from "next/link";

export default function Signup() {
  const [state, formAction] = useFormState(createUser, { error: "" });

  return (
    <div className="mx-auto w-full max-w-lg h-full my-auto">
      <form className="rounded border p-8 shadow-md" action={formAction}>
        <div className="mb-2">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded border bg-neutral-50 px-4 py-2"
          />
          {state.error && (
            <div className="mt-2 text-red-500">{state.error}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoCapitalize="off"
            autoComplete="off"
            className="w-full rounded border bg-neutral-50 px-4 py-2"
          />
          {state.error && (
            <div className="mt-2 text-red-500">{state.error}</div>
          )}
        </div>

        <button
          className="rounded bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700 w-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-neutral-800 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
