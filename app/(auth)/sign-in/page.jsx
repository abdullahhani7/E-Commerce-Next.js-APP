"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Api from "@/app/_utils/Api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter("");

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/");
    }
  }, []);

  const onSignIn = () => {
    Api.signIn(email, password)
      .then((response) => {
        sessionStorage.setItem("user", JSON.stringify(response?.data?.user));
        sessionStorage.setItem("jwt", response?.data?.jwt);
        toast("Signed in successfully.");
        router.push("/");
      })
      .catch((error) => {
        console.log(
          "An error occurred:",
          error?.response?.data?.error?.message
        );
        toast("Error while signing in.");
      });
  };

  return (
    <div className="flex justify-center m-20 ">
      <div className="flex flex-col items-center gap-5 w-100 bg-gray-100 p-5">
        <Image src={"/logo.png"} width={200} height={200} alt="" />
        <p>Sign In</p>

        <div className="flex flex-col w-full gap-5">
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
          <Button disabled={!email || !password} onClick={() => onSignIn()}>
            Sign In
          </Button>
          <p>
            Don't Have an Account ?{" "}
            <Link className="text-blue-500" href={"/create-account"}>
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
