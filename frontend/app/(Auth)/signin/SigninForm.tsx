"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { authContext } from "@/store/AuthContextProvider";
import React from "react";
export default function SigninForm(): React.ReactElement {
  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userConfirmPassword,
    setUserConfirmPassword,
    checkboxValue,
    setCheckboxValue,
    signinHandler,
    buttonStatus,
  } = React.useContext(authContext);
  return (
    <>
      {/* Form */}
      <form className="space-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition-all
                placeholder:text-zinc-500
                focus:border-blue-500/50
                focus:bg-white/10
                focus:ring-2
                focus:ring-blue-500/20
              "
            value={userName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(event.target.value);
            }}
            name="userName"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Email Address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition-all
                placeholder:text-zinc-500
                focus:border-blue-500/50
                focus:bg-white/10
                focus:ring-2
                focus:ring-blue-500/20
              "
            value={userEmail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserEmail(event.target.value);
            }}
            name="userEmail"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-zinc-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Create a strong password"
            className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition-all
                placeholder:text-zinc-500
                focus:border-blue-500/50
                focus:bg-white/10
                focus:ring-2
                focus:ring-blue-500/20
              "
            value={userPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserPassword(event.target.value);
            }}
            name="userPassword"
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-zinc-300"
          >
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                text-white
                outline-none
                transition-all
                placeholder:text-zinc-500
                focus:border-blue-500/50
                focus:bg-white/10
                focus:ring-2
                focus:ring-blue-500/20
              "
            value={userConfirmPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserConfirmPassword(event.target.value)
            }
            name="userConfirmPassword"
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-3 text-sm text-zinc-400">
          <input
            type="checkbox"
            className="mt-1 rounded border-white/20 bg-transparent"
            name="userCheckBox"
            // defaultChecked
            checked={checkboxValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCheckboxValue(event.target.checked);
            }}
          />

          <span>
            I agree to the{" "}
            <span className="cursor-pointer text-blue-400 hover:text-blue-300">
              Terms & Conditions
            </span>
          </span>
        </label>

        {/* Button */}
        <PrimaryButton
          title="Create Account"
          type="button"
          disabled={
            checkboxValue == false ||
            userName == "" ||
            userEmail == "" ||
            userPassword == "" ||
            userConfirmPassword == ""
              ? true
              : buttonStatus
          }
          onClick={signinHandler}
        />
      </form>
    </>
  );
}
