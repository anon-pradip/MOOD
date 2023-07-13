import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" relative h-screen w-screen">
      <aside className=" w-[200px] absolute top-0 left-0 h-full border-r border-black/10">
        Mood
      </aside>
      <div className=" ml-[200px] h-full">
        <header className=" h-14 border-b border-black/10">
          <div className=" flex h-full w-full p-2 justify-end items-center ">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-56px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
