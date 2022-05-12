import { useSession } from "next-auth/react";
import Link from "next/link";
import Container from "../components/containers/Container";
import Features from "../components/ui/features/Features";
import { useDevice } from "../lib/hooks/useDevice";

export default function Home() {
  const session = useSession();

  return (
    <>
      <Container title="Home">
        <div className="flex items-center justify-center mt-32">
          <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col items-start space-y-1">
              <h1 className="text-gray-900 font-semibold text-5xl">JaNotes</h1>
              <p className="text-lg text-gray-400 underline">
                JaNotes, save your notes for your classes and share it to other
                people!
              </p>
            </div>
            <Features />
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-gray-900 text-4xl font-semibold">
                Ready to create your notes?
              </h1>
              <Link href={"/auth/login"}>
                <button className="bg-rose-500 hover:bg-rose-600  text-white font-semibold rounded-md px-2 py-2 shadow-2xl">
                  Create one now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
