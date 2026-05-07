import Link from "next/link";
import React from "react";

export default function Welcome(): React.ReactElement {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#09090B] text-white">
      {/* Ambient Background */}
      <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Navbar */}
      <header className="absolute left-0 top-0 z-20 w-full border-b border-white/10 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-lg
                font-bold
                text-blue-400
                backdrop-blur-xl
              "
            >
              T
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-wide">TaskFlow</h1>

              <p className="text-xs text-zinc-500">Productivity Platform</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <button className="transition hover:text-white">Features</button>

            <button className="transition hover:text-white">Solutions</button>

            <button className="transition hover:text-white">Pricing</button>

            <button className="transition hover:text-white">Contact</button>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="">
              <button
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
              >
                Login
              </button>
            </Link>
            <Link href="/signin">
              <button
                className="
                rounded-2xl
                bg-blue-500
                px-5
                py-2
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/20
              "
              >
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          pt-40
          text-center
        "
      >
        {/* Badge */}
        <div
          className="
            mb-8
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-5
            py-2
            text-sm
            text-blue-300
            backdrop-blur-xl
          "
        >
          Modern Full Stack Task Management Platform
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-5xl
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            md:text-7xl
          "
        >
          Manage Teams,
          <br />
          Tasks & Workflow
          <br />
          Effortlessly
        </h1>

        {/* Description */}
        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-400
          "
        >
          A modern productivity platform designed for teams and organizations to
          manage projects, track progress, collaborate in real-time, and boost
          workflow efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button
            className="
              rounded-2xl
              bg-blue-500
              px-8
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-blue-400
              hover:shadow-xl
              hover:shadow-blue-500/20
            "
          >
            Continue as User
          </button>

          <button
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
            "
          >
            Continue as Admin
          </button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid w-full max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Projects Managed",
              value: "12K+",
            },
            {
              title: "Teams Connected",
              value: "4.8K+",
            },
            {
              title: "Tasks Completed",
              value: "98K+",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
              "
            >
              <h2 className="text-4xl font-bold text-white">{item.value}</h2>

              <p className="mt-3 text-sm text-zinc-500">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Glass Preview */}
        <div
          className="
            mt-20
            w-full
            max-w-6xl
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-6
            shadow-2xl
            backdrop-blur-2xl
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >
            <div>
              <h3 className="text-xl font-semibold">
                Smart Productivity Dashboard
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Organize your workflow efficiently
              </p>
            </div>

            <button
              className="
                rounded-xl
                bg-blue-500
                px-4
                py-2
                text-sm
                font-medium
                text-white
              "
            >
              Explore
            </button>
          </div>

          {/* Fake Dashboard Preview */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#18181B]/80
                  p-5
                "
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-white/10" />

                  <div className="h-8 w-8 rounded-full bg-blue-500/20" />
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-full rounded-full bg-white/10" />

                  <div className="h-3 w-[80%] rounded-full bg-white/10" />

                  <div className="h-3 w-[60%] rounded-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
