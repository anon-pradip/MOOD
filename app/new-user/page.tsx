import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });
  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    });
  }
  redirect("/journal");
};

const NewUser = async () => {
  // const user = await currentUser();
  await createNewUser();
  return <div>Loading...</div>;
};

export default NewUser;
