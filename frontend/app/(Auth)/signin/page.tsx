import PrimaryButton from "@/components/PrimaryButton";
import { signInService } from "@/services/authService";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import SigninForm from "./SigninForm";

export default function SignIn(): React.ReactElement {
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
        <SigninForm />
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
