import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen w-screen bg-black flex justify-center items-center text-white">
      <div className=" max-w-lg w-full mx-auto">
        <h1 className=" text-6xl py-3">The best journal app, period.</h1>
        <p className="py-2 text-xl text-white/60">
          This is the best app for tracking your mood through out your life. All
          you need is to be honest.
        </p>
        <div>
          <Link href={"/journal"}>
            <button className="bg-green-600 rounded-md p-2 hover:bg-green-800">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
