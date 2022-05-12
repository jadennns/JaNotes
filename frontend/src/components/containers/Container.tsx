import { NextSeo } from "next-seo";
import { ReactNode } from "react";
import Footer from "../ui/nav/Footer";
import Navbar from "../ui/nav/Navbar";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Container({ title, children }: Props) {
  return (
    <>
      <NextSeo title={title} />
      <div className="flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
