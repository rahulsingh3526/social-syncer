"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputForm } from "../inputform/page";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-yellow-400 min-h-screen">
        <div>
          {" "}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">{"Edit profile"}</Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

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
