import React from "react";
export default function AdminHome() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">
        {/* Ambient Background Glow */}
        <div className="absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-[-15rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />

        {/* Navbar */}
        <header className="relative z-10 border-b border-white/10 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-lg font-bold text-blue-400 backdrop-blur-xl">
                T
              </div>

              <div>
                <h1 className="text-lg font-semibold tracking-wide">
                  TaskFlow
                </h1>

                <p className="text-xs text-zinc-500">Full Stack Task Manager</p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
              <button className="transition hover:text-white">Dashboard</button>

              <button className="transition hover:text-white">Projects</button>

              <button className="transition hover:text-white">Teams</button>

              <button className="transition hover:text-white">Analytics</button>
            </div>

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
              Get Started
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
          <div
            className="
            mb-6
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
            Modern Productivity Platform
          </div>

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
            Manage Tasks <br />
            With Simplicity & Precision
          </h1>

          <p
            className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-400
          "
          >
            A premium full-stack task management platform designed for teams and
            individuals to organize workflows, track progress, and collaborate
            efficiently.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className="
              rounded-2xl
              bg-blue-500
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-blue-400
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
            >
              Start Managing
            </button>

            <button
              className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-7
              py-4
              text-sm
              font-medium
              text-white
              backdrop-blur-xl
              transition
              hover:bg-white/10
            "
            >
              Explore Features
            </button>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
          <div
            className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/5
            p-6
            shadow-2xl
            backdrop-blur-2xl
          "
          >
            {/* Top Bar */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Team Dashboard</h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Track your workflow and productivity
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
                transition
                hover:bg-blue-400
              "
              >
                Create Task
              </button>
            </div>

            {/* Stats */}
            <div className="grid gap-5 md:grid-cols-4">
              {[
                {
                  title: "Total Tasks",
                  value: "128",
                },
                {
                  title: "Completed",
                  value: "87",
                },
                {
                  title: "In Progress",
                  value: "24",
                },
                {
                  title: "Pending",
                  value: "17",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#18181B]/80
                  p-5
                "
                >
                  <p className="text-sm text-zinc-500">{item.title}</p>

                  <h3 className="mt-3 text-3xl font-bold">{item.value}</h3>
                </div>
              ))}
            </div>

            {/* Task Boards */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Todo",
                  tasks: 4,
                },
                {
                  title: "In Progress",
                  tasks: 3,
                },
                {
                  title: "Completed",
                  tasks: 6,
                },
              ].map((board) => (
                <div
                  key={board.title}
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#18181B]/80
                  p-5
                "
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="font-semibold">{board.title}</h3>

                    <span
                      className="
                      rounded-full
                      bg-white/5
                      px-3
                      py-1
                      text-xs
                      text-zinc-400
                    "
                    >
                      {board.tasks} Tasks
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[1, 2].map((task) => (
                      <div
                        key={task}
                        className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                        transition
                        hover:bg-white/10
                      "
                      >
                        <h4 className="font-medium">Design Dashboard UI</h4>

                        <p className="mt-2 text-sm text-zinc-500">
                          Create premium SaaS task management layout
                        </p>

                        <div className="mt-4 flex items-center justify-between">
                          <span
                            className="
                            rounded-full
                            bg-blue-500/10
                            px-3
                            py-1
                            text-xs
                            text-blue-300
                          "
                          >
                            High Priority
                          </span>

                          <span className="text-xs text-zinc-500">
                            2 Days Left
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
