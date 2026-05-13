"use client";
import React from "react";

import PrimaryButton from "@/components/PrimaryButton";
import { authContext } from "@/store/AuthContextProvider";
export default function LoginForm() {
  const {
    loginHandler,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    buttonStatus,
    checkboxValue,
    setCheckboxValue,
  } = React.useContext(authContext);

  return (
    <form className="space-y-4">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-300">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="userEmail"
          placeholder="Enter your email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-sm
        text-white
        outline-none
        transition-all
        placeholder:text-zinc-500
        focus:border-blue-500/50
        focus:bg-white/10
        focus:ring-2
        focus:ring-blue-500/20
      "
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-zinc-300">
          Password
        </label>

        <input
          id="password"
          type="password"
          name="userPassword"
          placeholder="Enter your password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-4
        py-3
        text-sm
        text-white
        outline-none
        transition-all
        placeholder:text-zinc-500
        focus:border-blue-500/50
        focus:bg-white/10
        focus:ring-2
        focus:ring-blue-500/20
      "
        />
      </div>

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-zinc-400">
          <input
            type="checkbox"
            className="rounded border-white/20 bg-transparent"
            checked={checkboxValue}
            onChange={(event) => setCheckboxValue(event.target.checked)}
          />
          Remember me
        </label>
        <button
          type="button"
          className="text-blue-400 transition hover:text-blue-300"
        >
          Forgot password?
        </button>
      </div>

      {/* Button */}
      <div className="pt-2">
        <PrimaryButton
          title="Sign In"
          type="button"
          onClick={loginHandler}
          disabled={userEmail == "" || userPassword == "" ? true : buttonStatus}
        />
      </div>
    </form>
  );
}
