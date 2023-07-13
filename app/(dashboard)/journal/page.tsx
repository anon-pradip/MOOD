import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";

const getEnteries = async () => {
  const user = await getUserByClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEnteries();
  return (
    <div className=" p-3 bg-slate-200 h-full">
      <h1 className=" text-3xl font-bold pb-4">Journal(s)</h1>
      <NewEntryCard />
      <div className=" grid grid-cols-4 gap-3 p-2 my-4">
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
