"use client";

import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import SecondaryButton from "../SecondaryButton";
import { logOutService } from "@/services/authService";
import { redirect } from "next/navigation";
import { authContext } from "@/store/AuthContextProvider";

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const { logoutHandler } = React.useContext(authContext);
  return (
    <div className="relative">
      {/* Desktop Button */}
      {/* <button
        className="
          hidden
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-white
          transition
          hover:bg-white/10
          md:block
					z-999999
        "
        onClick={() => {
          console.log("hello world");
        }}
      >
        Get Started
        </button> */}
      <SecondaryButton title={"Logout"} type="button" onClick={logoutHandler} />
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="
          relative
          z-[100]
          rounded-2xl
          border
          border-white/10
          bg-white/5
          p-2.5
          text-white
          transition
          hover:bg-white/10
          md:hidden
        "
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            absolute
            right-0
            top-14
            z-[99]
            w-56
            rounded-2xl
            border
            border-white/10
            bg-[#09090B]/95
            p-5
            shadow-2xl
            backdrop-blur-2xl
            md:hidden
          "
        >
          <div className="flex flex-col gap-5 text-sm text-zinc-300">
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="transition hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/projects"
              onClick={() => setOpen(false)}
              className="transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/admin/teams"
              onClick={() => setOpen(false)}
              className="transition hover:text-white"
            >
              Teams
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
