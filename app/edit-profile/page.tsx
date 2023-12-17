"use client";
import React, { useState } from "react";
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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { addUserData, getUser, getUserData } from "@/firebase/methods";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import { auth } from "@/firebase/firebaseConfig";

const Edit = () => {
  // const { currentUser } = useAuth();
  const uid = auth?.currentUser?.uid;
  const router = useRouter();
  const [userData, setUserData] = useState({});

  const FormSchema = z.object({
    userid: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
    username: z.string().min(10, {
      message: "Username must be at least 10 characters.",
    }),
    position: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userid: "",
      username: "",
      position: "",
      // posts: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </div>
      ),
    });
    const uid = auth.currentUser?.uid;
    if (uid === undefined) return;
    addUserData(uid, data.userid, data.username, data.position);
    // router.push("/edit-profile");
    console.log(data);

    console.log(data);
  }

  console.log(uid);

  async function singleUsers() {
    const response = await fetch(`/api/user?uid=${uid}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response.json();
  }

  const { data: _userData } = useQuery({
    queryKey: ["singleUserData"],
    queryFn: singleUsers,
  });

  console.log(_userData);

  async function singleUsersPermission() {
    const response = await fetch(`/api/permissions?uid=${uid}`);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response.json();
  }

  const { data: _userPermissions } = useQuery({
    queryKey: ["userPermissions"],
    queryFn: singleUsersPermission,
  });

  console.log(_userPermissions);

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
        <div className="py-8">
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-[420px] md:w-[420px] space-y-4 flex flex-col justify-center bg-white rounded-3xl items-center min-h-screen border-2 border-red-500"
                >
                  <p className="text-2xl ">Enter your details</p>
                  <FormField
                    control={form.control}
                    name="userid"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UserId</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>Your Unique userId</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UserName</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>Your Unique userId</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>Your Unique userId</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="w-2/3" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
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
