import React from "react";
export default function MultiPurposeContainer({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <div className=" rounded-2xl border border-white/10 bg-[#18181B]/80 p-5 ">
        {children}
      </div>
    </>
  );
}
