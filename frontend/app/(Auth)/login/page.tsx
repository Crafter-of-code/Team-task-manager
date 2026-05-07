import Link from "next/link";
import React from "react";

export default function Login(): React.ReactElement {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute left-[-10rem] top-[-10rem] h-[25rem] w-[25rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-12rem] right-[-10rem] h-[25rem] w-[25rem] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Glass Card */}
      <section
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          shadow-2xl
          backdrop-blur-2xl
        "
      >
        {/* Heading */}
        <div className="mb-8 space-y-2 text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="text-sm text-zinc-400">
            Login to continue to your task
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="space-y-2 gap-0.5 flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-300 pd-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
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
          <div className="space-y-2 gap-0.5 flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
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
          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-blue-500
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-blue-400
              hover:shadow-lg
              hover:shadow-blue-500/20
              active:scale-[0.98]
            "
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-zinc-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signin"
            className="cursor-pointer text-blue-400 hover:text-blue-300"
          >
            Create account
          </Link>
        </p>
      </section>
    </main>
  );
}
