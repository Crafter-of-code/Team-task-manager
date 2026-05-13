import { MouseEventHandler } from "react";
import buttonPropsType from "./types/buttonPropType";

export default function DangerButton(props: buttonPropsType) {
  return (
    <>
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
                cursor-pointer
              "
        type={props.type}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
}
