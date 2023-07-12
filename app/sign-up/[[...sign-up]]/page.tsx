import React from "react";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return <SignUp redirectUrl={"/new-user"} afterSignUpUrl={"/new-user"} />;
};

export default Page;
