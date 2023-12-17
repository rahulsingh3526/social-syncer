import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div>
      {" "}
      <Card className="flex flex-col justify-between w-80 hover:shadow-xl">
        <CardHeader className="flex-row gap-4 ">
          <div className="flex justify-around items-center gap-20">
            <Skeleton className="w-14 h-14 rounded-full" />
            <Skeleton className="w-32 h-6" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 flex-grow mt-4" />
          <Skeleton className="h-4 flex-grow mt-4" />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
