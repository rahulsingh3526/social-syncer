"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full bg-yellow-400 min-h-screen">
        <div className="border-2 border-red-500 p-8 rounded-md">
          <p className=" p-8 rounded-lg bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
            banner
          </p>
          <p>images</p>

          <p className="font-bold">name</p>
          <div>post</div>
          <div>follower</div>
          <div>following </div>
        </div>
      </div>
    </>
  );
};

export default page;
