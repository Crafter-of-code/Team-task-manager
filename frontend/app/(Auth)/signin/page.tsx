import PrimaryButton from "@/components/PrimaryButton";
import { signInService } from "@/services/authService";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function SignIn(): React.ReactElement {
  async function signinHandler(formData: FormData) {
    "use server";
    const userName = formData.get("userName") as string;
    const userEmail = formData.get("userEmail") as string;
    const userPassword = formData.get("userPassword") as string;
    const userConfirmPassword = formData.get("userConfirmPassword") as string;
    const userCheckBox = formData.get("userCheckBox") as string;
    if (userCheckBox == "on") {
      if (userPassword == userConfirmPassword) {
        const data = {
          userName,
          userEmail,
          userPassword,
        };
        const result = await signInService(data);
        if (result.data.success) {
          redirect("/login");
        }
      } else {
        console.log("you password mismatch");
      }
    } else {
      console.log("please check the checkbox");
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
					my-2
        "
      >
        {/* Heading */}
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Create Account
          </h1>

          <p className="text-sm text-zinc-400">
            Start organizing your tasks and projects efficiently
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" action={signinHandler}>
          {/* Full Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-300">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
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
              defaultValue="Uzair"
              name="userName"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-300"
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
              defaultValue="uzair@google.com"
              name="userEmail"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
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
              name="userPassword"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-zinc-300"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
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
              name="userConfirmPassword"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 text-sm text-zinc-400">
            <input
              type="checkbox"
              className="mt-1 rounded border-white/20 bg-transparent"
              name="userCheckBox"
              defaultChecked
            />

            <span>
              I agree to the{" "}
              <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Button */}
          <PrimaryButton title="Create Account" type="submit" />
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="cursor-pointer text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </p>
      </section>
    </main>
  );
}
