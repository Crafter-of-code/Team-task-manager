import React from "react";
type props = {
  title: string;
};
function PrimaryButton(props: props): React.ReactElement {
  return (
    <button
      className="
    rounded-2xl
    bg-blue-500
    px-8
    py-4
    text-sm
    font-semibold
    text-white
    transition-all
    hover:bg-blue-400
    hover:shadow-xl
    hover:shadow-blue-500/20
    active:scale-[0.98]
  "
    >
      {props.title}
    </button>
  );
}

export default PrimaryButton;
