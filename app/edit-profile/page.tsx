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
import Navbar from "../navbar";
import { useRouter } from "next/navigation";
import Card from "../Card";
import InputForm from "../inputform/page";

const Edit = () => {
  const router = useRouter();
  return (
    <>
      {" "}
      <Navbar />
      <div
        className="flex flex-col justify-center items-center w-full h-full min-h-screen bg-cover bg-center  align-center gap-4"
        style={{
          backgroundImage: 'url("/2d-graphic.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          {" "}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">{"Edit profile"}</Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                {/* <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription> */}
              </SheetHeader>
              <InputForm />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <Card />
      </div>
    </>
  );
};

export default Edit;
