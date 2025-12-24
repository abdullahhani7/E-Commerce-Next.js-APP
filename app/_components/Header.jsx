"use client";

import { Button } from "@/components/ui/button";
import { CircleUserIcon, LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Api from "../_utils/Api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  const [isLogIn, setisLogIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    setisLogIn(!!token);
  }, []);

  useEffect(() => {
    getCategoryList();
  }, []);

  const onSignOut = () => {
    sessionStorage.clear();
    router.push("/sign-in");
  };

  const getCategoryList = () => {
    Api.getCategory().then((res) => {
      setCategory(res.data.data);
    });
  };

  return (
    <div className="shadow-md flex justify-between py-2 px-3">
      <div className="flex items-center gap-8">
        <Image width={100} height={100} src="/logo.png" alt="logo" priority />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <h2 className="cursor-pointer flex gap-2 items-center border p-2 rounded-full bg-slate-200">
              <LayoutGrid />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {category.map((cat) => (
              <DropdownMenuItem key={cat.id}>
                <Image
                  src={cat?.icon?.[0].url}
                  width={23}
                  height={23}
                  alt=""
                  className="rounded-full"
                />
                {/* {console.log(
                  `${process.env.NEXT_PUBLIC_STRAPI_URL}${cat?.icon?.[0].url}`
                )} */}
                <p className="cursor-pointer text-lg">{cat.name}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex gap-3 items-center border rounded-full p-2">
          <Search />
          <input type="text" placeholder="search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center">
          <ShoppingBag /> 0
        </h2>
        {!isLogIn ? (
          <Link href={"/sign-in"}>
            <Button className="text-black ">Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CircleUserIcon className="w-7 h-7 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Orders</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSignOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
