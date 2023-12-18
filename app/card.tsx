import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface UserType {
  userId: string;
  username: string;
  description: string;
}

const CardComp = ({ userId, username, description }: UserType) => {
  return (
    <div className="w-2/3 md:w-2/5 flex flex-col justify-center items-center bg-white border-2 border-red-500 p-6 rounded-3xl">
      <p className="relative top-4 py-2 w-full h-32 rounded-xl bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"></p>
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

      <p className="font-bold mt-5 text-3xl ">{userId}</p>
      <p className="font-bold mt-5 text-3xl ">{username}</p>

      <p className=" text-gray-500 text-lg mt-3">{description}</p>
      <div className=" flex flex-row space-x-5 md:space-x-16 p-4 m-4 justify-end">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-3xl font-bold">1200</p>
          <div className=" text-gray-500 text-sm">Followers</div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-3xl font-bold">600</p>
          <div className=" text-gray-500 text-sm">Following</div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
