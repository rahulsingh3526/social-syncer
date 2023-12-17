"use client";
import { useAuth } from "@/context/authContext";
import React from "react";
import GoogleButton from "react-google-button";
import Navbar from "../navbar";

const SignIn = () => {
  const { LoginWithGoogle } = useAuth();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen rounded-lg">
        <GoogleButton type="dark" onClick={LoginWithGoogle} />;
      </div>
    </>
  );
};

export default SignIn;
