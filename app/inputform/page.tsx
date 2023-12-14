"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

export default function InputForm() {
  const router = useRouter();

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
    // posts: z.number().min(5, {
    //   message: "Username must be at least 2 characters.",
    // }),
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
    router.push("/main");
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 md:w-1/3 space-y-6 flex flex-col justify-center rounded-3xl items-center min-h-screen border-2 border-red-500"
        >
          <p className="text-2xl text-red-500">Add user</p>
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
    </div>
  );
}
