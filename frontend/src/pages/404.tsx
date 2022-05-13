import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NextSeo title="Invalid Page" />
      <div className="flex items-center justify-center mt-32">
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl text-gray-900 font-bold">404: Not Found</h1>
            <Link href={"/"}>
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-3 py-2 rounded-md">
                Go Home
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={"/gifs/404.gif"}
              alt="404 Gif"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
