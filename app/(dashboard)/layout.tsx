import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" relative h-screen w-screen">
      <aside className=" w-[200px] absolute top-0 left-0 h-full border border-black/10">
        Mood
      </aside>
      <div className=" ml-[200px]">
        <header>hello</header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
