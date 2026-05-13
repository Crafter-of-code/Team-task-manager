import MobileMenu from "@/components/admin/MobileMenue";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";
import React from "react";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <>
      {/**relative z-50 border-b border-white/10 backdrop-blur-xl */}
      <header
        className="sticky
    top-0
    z-999
    border-b
    border-white/10
    bg-[#09090B]/90
    backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-lg font-bold text-blue-400"
            >
              T
            </Link>

            <div>
              <h1 className="text-lg font-semibold tracking-wide text-white select-all">
                TaskFlow
              </h1>

              <p className="text-xs text-zinc-500">Full Stack Task Manager</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <Link href="/admin">Dashboard</Link>

            <Link href="/admin/projects">Projects</Link>

            <Link href="/admin/teams">Teams</Link>
          </div>

          {/* Small Client Component */}
          <MobileMenu />
        </nav>
      </header>
      {children}
    </>
  );
}
