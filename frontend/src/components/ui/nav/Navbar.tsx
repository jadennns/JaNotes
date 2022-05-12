import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data } = useSession<true>();

  return (
    <nav className="overflow-hidden fixed top-0 w-[100%] h-fit py-2">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-rose-500 font-bold text-4xl px-10 cursor-pointer">
            JaNotes
          </h1>
        </Link>
        <div className="hidden lg:flex items-center space-x-2 relative px-2">
          <Link href={data?.user ? "/dashboard" : "/auth/login"}>
            <button className="bg-rose-500 text-white rounded-md text-sm font-semibold px-6 py-2">
              {data?.user ? "Dashboard" : "Login"}
            </button>
          </Link>
          <Link href={"/docs"}>
            <button className="bg-rose-500 text-white rounded-md text-sm font-semibold px-6 py-2">
              Docs
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
