import React from "react";
import buttonPropsType from "./types/buttonPropType";
function SecondaryButton(props: buttonPropsType): React.ReactElement {
  return (
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
                cursor-pointer
              "
      type={props.type}
    >
      {props.title}
    </button>
  );
}

export default SecondaryButton;
