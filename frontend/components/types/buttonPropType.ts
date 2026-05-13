import React, { MouseEventHandler } from "react";

type buttonPropsType = {
  title: string | React.ReactElement;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default buttonPropsType;
