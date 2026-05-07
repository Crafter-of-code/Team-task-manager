import React from "react";

function SecondaryButton(): React.ReactElement {
  return (
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
    transition-all
    hover:bg-white/10
    active:scale-[0.98]
  "
    >
      Glass Button
    </button>
  );
}

export default SecondaryButton;
