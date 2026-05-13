import MultiPurposeContainer from "@/components/MultiPurposeContainer";
import { getAllProjects } from "@/services/adminService";
import { redirect } from "next/navigation";
import React from "react";

export default function Project(): React.ReactElement {
  (async () => {
    "use server";
    const result = await getAllProjects();
  })();
  async function redirectionToCreate() {
    "use server";
    redirect("/admin/projects/create-project");
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-8 text-white">
      {/* Main Content */}
      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div
              className="
                mb-3
                inline-flex
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-1.5
                text-xs
                text-blue-300
                backdrop-blur-xl
              "
            >
              Workspace
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              Projects Dashboard
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Manage and organize all your projects from one place.
            </p>
          </div>

          {/* Create Button */}
          <form action={redirectionToCreate}>
            <button
              type="submit"
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
              Create New Project
            </button>
          </form>
        </div>

        {/* Projects Grid */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <MultiPurposeContainer key={project}>
              {/* Card Header */}
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">
                    Task Management Platform
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    Internal Productivity System
                  </p>
                </div>

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
                  Active
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-zinc-400">
                Manage workflows, assign tasks, monitor deadlines, and improve
                team productivity with a modern workspace.
              </p>

              {/* Divider */}
              <div className="my-5 border-t border-white/10" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Team Members</p>

                  <h4 className="mt-1 text-sm font-medium">5 Members</h4>
                </div>

                <button
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Open
                </button>
              </div>
            </MultiPurposeContainer>
          ))}
        </section>
      </section>
    </main>
  );
}
