// "use client";
import PrimaryButton from "@/components/PrimaryButton";
import { loginService } from "@/services/authService";
// import { cookies } from "next/headers";
import Link from "next/link";
import React, { FormHTMLAttributes } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
interface resultType {
  success: boolean;
  message: string;
  cookie?: {
    _em: string;
    _role?: string;
  };
  role?: "member" | "admin";
}
export default function Login(): React.ReactElement {
  async function loginHandler(formData: FormData) {
    "use server";
    const userEmail = formData.get("userEmail") as string;
    const userPassword = formData.get("userPassword") as string;
    const loginData = { userEmail, userPassword };
    let result: resultType /*| errorResponseType*/;
    const cookie = await cookies();
    try {
      result = (await loginService(loginData)).data;
      console.log(result);
    } catch (err: any) {
      if (err.response === undefined) {
        result = {
          success: false,
          // role:""
          message: "Server is not running",
        };
      } else {
        result = err.response.data;
        console.log(result);
      }
    }
    if (result.success) {
      cookie.set("_em", result.cookie?._em || "", { maxAge: 60 * 60 * 24 });
      if (result.cookie?._role) {
        cookie.set("_role", result.cookie._role || "");
      }
      if (result.role == "admin") {
        redirect("/admin");
      } else {
        redirect("/home");
      }
    } else {
      console.log(result.message);
    }
  }
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
        <form action={loginHandler} className="space-y-5">
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
              name="userEmail"
              defaultValue="uzair@google.com"
            />
          </div>
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
              name="userPassword"
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
              defaultValue="1234"
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
          <PrimaryButton title="Sign In" type="submit" />
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
