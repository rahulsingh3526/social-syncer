"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full bg-yellow-400 min-h-screen">
        <div className="w-2/3 md:w-1/3 flex flex-col justify-center items-center bg-white border-2 border-red-500 p-8 rounded-md">
          <p className="relative top-4 py-2 w-full h-24 rounded-lg bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
            banner
          </p>
          <div className=" rounded-full p-1 bg-white z-10">
            {" "}
            <Avatar>
              <AvatarImage
                className="absolute"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <p className="font-bold mt-5 text-3xl ">Rahul Singh</p>
          <p className="font-thin text-gray-500 text-lg mt-3">Frontend Dev</p>
          <div className=" flex flex-row space-x-5 md:space-x-16 p-4 m-4 justify-end">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-3xl font-bold">4000</p>
              <div className="font-thin text-gray-500 text-sm">Followers</div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-3xl font-bold">40</p>
              <div className="font-thin text-gray-500 text-sm">Followers</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
