"use client";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import SideNav from "./_components/SideNav";
const DashboardLayout = ({ children }) => {
  return (
    <SignedIn>
      <div className="">
        <div className="md:w-64 fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <div>{children}</div>
        </div>
      </div>
    </SignedIn>
  );
};

export default DashboardLayout;
