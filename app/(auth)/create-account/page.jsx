"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Api from "@/app/_utils/Api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter("");

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onCreateAccount = () => {
    Api.registerUser(username, email, password)
      .then((response) => {
        console.log("User profile", response?.data?.user);
        console.log("User token", response?.data?.jwt);
        sessionStorage.setItem("user", JSON.stringify(response?.data?.user));
        sessionStorage.setItem("jwt", response?.data?.jwt);
        toast("account created successfully.");
        router.push("/");
      })
      .catch((error) => {
        console.log(
          "An error occurred:",
          error?.response?.data?.error?.message
        );
        toast("Error while creating account.");
      });
  };

  return (
    <div className="flex justify-center m-20 ">
      <div className="flex flex-col items-center gap-5 w-100 bg-gray-100 p-5">
        <Image src={"/logo.png"} width={200} height={200} alt="" />
        <p>Create New Account</p>

        <div className="flex flex-col w-full gap-5">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white"
            type="text"
            placeholder="username"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white"
            type="email"
            placeholder="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white"
            type="password"
            placeholder="password"
          />
          <Button
            disabled={!username || !email || !password}
            onClick={() => onCreateAccount()}
          >
            Create New Account
          </Button>
          <p>
            already Have an Account{" "}
            <Link className="text-blue-500" href={"/sign-in"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
