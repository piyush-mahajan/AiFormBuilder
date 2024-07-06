"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 border-b shadow-sm">
      <div className="flex items-center justify-between">
        <Image src={"/logo.svg"} width={180} height={50}></Image>
        {isSignedIn ? (
          <div>
            <Button variant="outline">Dashboard</Button>
            <UserButton></UserButton>
          </div>
        ) : (
          <Button>Get Started</Button>
        )}
      </div>
    </div>
  );
};

export default Header;
