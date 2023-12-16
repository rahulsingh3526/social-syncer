"use client";
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "../navbar";
import Card from "../Card";
s;

const Allusers = () => {
  const { status, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async function allUsers() {
      const response = await fetch("/api/users");
      return response.json();
    },
  });
  console.log(data);
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
};

export default Allusers;
