"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { addUserData } from "@/firebase/methods";
import { useState } from "react";
import Navbar from "../navbar";
import { auth } from "@/firebase/firebaseConfig";

export default function InputForm() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const FormSchema = z.object({
    userid: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
    username: z.string().min(10, {
      message: "Username must be at least 10 characters.",
    }),
    description: z.string().min(5, {
      message: "Username must be at least 5 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userid: "",
      username: "",
      description: "",
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
    addUserData(uid, data.userid, data.username, data.description);
    router.push("/edit-profile");
    console.log(data);
  }

  // const saveUserData = async () => {
  //   try {
  //     await axios.post("/api/users", userData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
                    <Input placeholder="userId" {...field} />
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
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormDescription>Your Unique username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>Your description</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-2/3" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
