import MultiPurposeContainer from "@/components/MultiPurposeContainer";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import React from "react";

export default function CreateProject(): React.ReactElement {
  async function createProject(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <main className="relative overflow-hidden px-6 py-10 text-white">
      {/* Content */}
      <section className="relative z-10 mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center">
          <div
            className="
              mb-4
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-1.5
              text-center
              text-xs
              text-blue-300
              backdrop-blur-xl
            "
          >
            Project Workspace
          </div>

          <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Create New Project
          </h1>

          <p className="mt-3 max-w-2xl text-center text-sm leading-relaxed text-zinc-400">
            Add project details, assign members, and organize workflow in a
            clean productivity workspace.
          </p>
        </div>

        {/* Form Container */}
        <MultiPurposeContainer>
          <form className="space-y-6" action={createProject}>
            {/* Project Title */}
            <div>
              <label
                htmlFor="projectTitle"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Project Title
              </label>

              <input
                type="text"
                id="projectTitle"
                name="projectTitle"
                placeholder="Enter your project title"
                defaultValue="First Project"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#09090B]/80
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-zinc-500
                  focus:border-blue-500/50
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />
            </div>

            {/* Project Description */}
            <div>
              <label
                htmlFor="projectDescription"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Project Description
              </label>

              <textarea
                rows={5}
                id="projectDescription"
                name="projectDescription"
                placeholder="Write a short description about the project..."
                defaultValue="this is the project description"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#09090B]/80
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-zinc-500
                  focus:border-blue-500/50
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />
            </div>

            {/* Assign Member */}
            <div>
              <label
                htmlFor="assignedTo"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Assign Team Member
              </label>

              <input
                type="text"
                id="assignedTo"
                name="assignedTo"
                placeholder="Enter member name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#09090B]/80
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-zinc-500
                  focus:border-blue-500/50
                  focus:ring-2
                  focus:ring-blue-500/20
                "
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton type="submit" title="Create project" />
              <Link href="/admin/projects">
                <SecondaryButton title={"Cancel"} type="button" />
              </Link>
            </div>
          </form>
        </MultiPurposeContainer>
      </section>
    </main>
  );
}
