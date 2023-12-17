"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "../navbar";
import Cards from "../Cards";
import { resolve } from "path";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Loading from "../loading";

interface Users {
  id: string;
  name: string;
  position: string;
}

const Allusers = () => {
  const { data, isLoading, error } = useQuery<Users[] | null>({
    queryKey: ["allusers"],
    queryFn: async function allUsers() {
      const response = await fetch("/api/users");
      await new Promise((resolve) => setTimeout(resolve, 4000));
      return response.json();
    },
  });
  console.log(data);
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col w-full h-full min-h-screen bg-cover bg-center  align-center gap-4"
        style={{
          backgroundImage: 'url("/2d-graphic.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-12 ">
          <div className=" flex flex-wrap gap-8 p-4">
            {" "}
            {isLoading ? (
              <Loading />
            ) : (
              data?.map((person) => (
                <Card
                  key={person.id}
                  className="flex flex-col justify-between w-80 hover:shadow-xl"
                >
                  <CardHeader className="flex-row gap-4 ">
                    <div className="flex justify-around items-center gap-20">
                      <div>
                        <Avatar>
                          <AvatarImage
                            className="absolute"
                            src="https://github.com/shadcn.png"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle>{person.id}</CardTitle>
                      {/* <CardDescription>{person.id}</CardDescription> */}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{person.name}</p>
                  </CardContent>
                  <CardFooter>
                    <p>{person.position}</p>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Allusers;
