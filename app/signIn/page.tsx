"use client";
import { useAuth } from "@/context/authContext";
import React, { useCallback, useState } from "react";
import GoogleButton from "react-google-button";
import Navbar from "../navbar";

const SignIn = () => {
  const { LoginWithGoogle, SignOut } = useAuth();
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "SignOut" : "login"
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen rounded-lg">
        <GoogleButton type="dark" label="SignIn" onClick={LoginWithGoogle} />

        <button onClick={SignOut}>SignOut</button>

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
