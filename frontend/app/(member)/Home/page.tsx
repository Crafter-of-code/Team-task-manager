import React from "react";

export default function MemberTasks(): React.ReactElement {
  const tasks = [
    {
      id: 1,
      title: "Design Dashboard UI",
      description:
        "Create a premium SaaS dashboard layout for task analytics with responsive components, smooth user interactions, and enterprise-level visual consistency across all devices.",

      priority: "High",

      dueDate: "Today",

      status: "To Do",
    },

    {
      id: 2,

      title:
        "Complete Frontend & Backend Authentication API Integration for Secure User Management System",

      description:
        "Integrate the frontend authentication workflow with backend REST APIs, including user registration, login, JWT token handling, protected routes, session persistence, error handling, and secure communication between the client and server. Ensure proper validation, authentication middleware integration, loading states, and responsive UI feedback across the entire authentication process.",

      priority: "Medium",

      dueDate: "Tomorrow",

      status: "In Progress",
    },

    {
      id: 3,

      title: "Database Optimization & Query Performance Enhancement",

      description:
        "Improve MongoDB query performance and indexing strategy for large-scale task management data. Optimize aggregation pipelines, reduce redundant database calls, and improve API response times.",

      priority: "Low",

      dueDate: "2 Days Left",

      status: "Done",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 text-white">
      {/* Ambient Background */}
      <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Top Navbar */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-2xl
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Left Section */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              My Tasks
            </h1>

            <p className="mt-2 text-zinc-400">
              Manage and update your assigned tasks efficiently.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Search */}
            <input
              type="text"
              placeholder="Search tasks..."
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#18181B]
                px-5
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-zinc-500
                focus:border-blue-500/50
                focus:ring-2
                focus:ring-blue-500/20
              "
            />

            {/* Notification */}
            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                text-zinc-300
                transition
                hover:bg-white/10
              "
            >
              Notifications
            </button>

            {/* Settings */}
            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                text-zinc-300
                transition
                hover:bg-white/10
              "
            >
              Settings
            </button>

            {/* Create Task */}
            <button
              className="
                rounded-2xl
                bg-blue-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-blue-400
                hover:shadow-lg
                hover:shadow-blue-500/20
              "
            >
              Create Task
            </button>

            {/* Logout */}
            <button
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                px-6
                py-3
                text-sm
                font-medium
                text-red-400
                transition-all
                hover:bg-red-500/20
              "
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Total Tasks",
              value: "24",
            },

            {
              title: "Completed",
              value: "16",
            },

            {
              title: "Pending",
              value: "8",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-2xl
              "
            >
              <p className="text-sm text-zinc-500">
                {item.title}
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Task Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-2xl
                transition-all
                hover:bg-white/[0.07]
              "
            >
              {/* Top Section */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold leading-snug">
                    {task.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {task.description}
                  </p>
                </div>

                {/* Priority Badge */}
                <span
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-medium
                    whitespace-nowrap

                    ${
                      task.priority === "High"
                        ? "bg-red-500/10 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                    }
                  `}
                >
                  {task.priority}
                </span>
              </div>

              {/* Bottom Section */}
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                {/* Due Date */}
                <div>
                  <p className="text-sm text-zinc-500">
                    Due Date
                  </p>

                  <h3 className="mt-1 text-sm font-medium">
                    {task.dueDate}
                  </h3>
                </div>

                {/* Status Dropdown */}
                <div className="w-full md:w-[220px]">
                  <label className="mb-2 block text-sm text-zinc-500">
                    Task Status
                  </label>

                  <select
                    defaultValue={task.status}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#18181B]
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      focus:border-blue-500/50
                      focus:ring-2
                      focus:ring-blue-500/20
                    "
                  >
                    <option value="To Do">To Do</option>

                    <option value="In Progress">
                      In Progress
                    </option>

                    <option value="Done">Done</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}