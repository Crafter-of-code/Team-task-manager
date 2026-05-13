import React from "react";
import buttonPropsType from "./types/buttonPropType";
function PrimaryButton(props: buttonPropsType): React.ReactElement {
  return (
    <button
      className="
    rounded-2xl
     bg-blue-500
    px-4
    py-3
    text-sm
    font-semibold
     text-white
    transition-all
     hover:bg-blue-400
    hover:shadow-lg
    hover:shadow-blue-500/20
    active:scale-[0.98]
    cursor-pointer
    disabled:bg-blue-200
  "
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default PrimaryButton;
