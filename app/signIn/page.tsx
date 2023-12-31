"use client";
import { useAuth } from "@/context/authContext";
import React, { useCallback, useState } from "react";
import GoogleButton from "react-google-button";
import Navbar from "../navbar";
import Input from "@/components/Input";
import { useAuthStore } from "@/store";

const SignIn = () => {
  const { LoginWithGoogle, SignOut } = useAuth();
  const { isLoginButtonVisible, setLoginButtonVisibility } = useAuthStore();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleLoginWithGoogle = () => {
    LoginWithGoogle();
  };

  const handleSignOut = () => {
    SignOut();
  };

  return (
    <>
      <Navbar />

      <div
        className="flex flex-col justify-center items-center w-full h-full min-h-screen bg-cover bg-center  align-center py-16 "
        style={{
          backgroundImage: 'url("/2d-graphic.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <GoogleButton type="dark" label="SignIn" onClick={LoginWithGoogle} />
   <div className="flex justify-end">SignOut</div>
        <button >SignOut</button> */}

        <div className=" px-12 pt-4 pb-4 self-center -mt-24 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <div className="flex flex-col gap-4 border-4 border-red-400 rounded-lg p-8">
            {/* <Input
              label="Email"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEmail(e.target.value)}
              id="email"
              type="email"
              value={email}
            />

            <Input
              label="Password"
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPassword(e.target.value)}
              id="password"
              // type={passwordVisible ? "text" : "password"}
              value={password}
              // position="absolute"
            /> */}

            {/* sorry the email and the password id not working at the last moment so adding the google auth  */}
            {isLoginButtonVisible && (
              <button
                className="bg-red-600 py-3 text-white rounded-md w-full hover:bg-red-700 transition"
                onClick={handleLoginWithGoogle}
              >
                Login
              </button>
            )}
            {!isLoginButtonVisible && (
              <button
                className=" bg-red-600 py-3 text-white rounded-md  hover:bg-red-700 transition"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            )}
          </div>
        </div>

        {/* {variant === "login" && (
          <button
            onClick={variant === "login" ? LoginWithGoogle : SignOut}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-8 hover:bg-red-700 transition"
          >
            {variant === "login" ? "Login" : "Sign Up"}
          </button>
        )}

        {variant === "SignOut" && (
          <button
            onClick={variant === "SignOut" ? LoginWithGoogle : SignOut}
            className="bg-red-600 py-3 text-white rounded-md w-full mt-8 hover:bg-red-700 transition"
          >
            {variant === "SignOut" ? "Login" : "SignOut"}
          </button>
        )} */}
      </div>
    </>
  );
};

export default SignIn;
