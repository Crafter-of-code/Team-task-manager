"use client";

import React from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { errorContext } from "@/store/ErrorContextProvided";
export default function Toast(): React.ReactElement | null {
  const {
    successStatus,
    successMessage,
    setSuccessStatus,
    setSuccessMessage,
    timeOut,
    setTimeOut,
  } = React.useContext(errorContext);

  // Auto Hide Toast
  React.useEffect(() => {
    if (!successMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
      setSuccessStatus(false);
      setTimeOut(0);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [successMessage, setSuccessMessage, setSuccessStatus]);

  // Hide Function
  function closeToast() {
    setSuccessMessage("");
    setSuccessStatus(false);
  }

  // Don't Render
  if (!successMessage) return null;

  return (
    <div
      className="
        fixed
        right-5
        top-5
        z-99999
        animate-in
        slide-in-from-top-5
        duration-300
      "
    >
      <div
        className={`
          relative
          flex
          min-w-[320px]
          items-start
          gap-4
          overflow-hidden
          rounded-3xl
          border
          p-4
          shadow-2xl
          backdrop-blur-2xl
          ${
            successStatus
              ? "border-emerald-500/20 bg-[#0F1B14]/95"
              : "border-red-500/20 bg-[#1B1010]/95"
          }
        `}
      >
        {/* Progress Bar */}
        <div
          className={`
            absolute
            bottom-0
            left-0
            h-[3px]
            animate-[toast_3s_linear_forwards]
            ${successStatus ? "bg-emerald-400" : "bg-red-400"}
          `}
        />

        {/* Icon */}
        <div
          className={`
            mt-0.5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            ${
              successStatus
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            }
          `}
        >
          {successStatus ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className={`
              text-sm
              font-semibold
              ${successStatus ? "text-emerald-300" : "text-red-300"}
            `}
          >
            {successStatus ? "Success" : "Error"}
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-300">
            {successMessage}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={closeToast}
          className="
            rounded-xl
            p-1.5
            text-zinc-500
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
