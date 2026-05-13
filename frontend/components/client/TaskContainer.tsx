import React from "react";
type taskContainerDataType = {
  taskId: string;
  taskTitle: string;
  taskDescription: string;
  taskDue: string;
  // taskStatus: "To Do" | "In Progress" | "Done";
  // taskPriority: "High" | "Low" | "Medium";
  taskStatus: string;
  taskPriority: string;
};
export default function TaskContainer(props: taskContainerDataType) {
  return (
    <>
      <div
        key={props.taskId}
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
              {props.taskTitle}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {props.taskDescription}
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
                      props.taskPriority === "High"
                        ? "bg-red-500/10 text-red-400"
                        : props.taskPriority === "Medium"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                    }
                  `}
          >
            {props.taskPriority}
          </span>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Due Date */}
          <div>
            <p className="text-sm text-zinc-500">Due Date</p>

            <h3 className="mt-1 text-sm font-medium">{props.taskDue}</h3>
          </div>

          {/* Status Dropdown */}
          <div className="w-full md:w-[220px]">
            <label className="mb-2 block text-sm text-zinc-500">
              Task Status
            </label>

            <select
              defaultValue={"To Do"}
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
                      focus:ring-blue-500/20'
                    "
            >
              <option value="To Do">To Do</option>

              <option value="In Progress">In Progress</option>

              <option value="Done">Done</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
