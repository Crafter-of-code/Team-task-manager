"use client";
import AdminContextProvider from "@/store/AdminContextProvider";
import AuthContextProvider from "@/store/AuthContextProvider";
import ErrorContextProvider from "@/store/ErrorContextProvided";
import MemberContextProvider from "@/store/MemberContextProvider";
import React from "react";

function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ErrorContextProvider>
        <AuthContextProvider>
          <MemberContextProvider>
            <AdminContextProvider>{children}</AdminContextProvider>
          </MemberContextProvider>
        </AuthContextProvider>
      </ErrorContextProvider>
    </>
  );
}

export default ContextProvider;
