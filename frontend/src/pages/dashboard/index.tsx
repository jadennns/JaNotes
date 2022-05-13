import { GetServerSidePropsContext } from "next";
import { GoogleProfile } from "next-auth/providers/google";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import Container from "../../components/containers/Container";
import Notes from "../../components/ui/notes/Notes";

interface Props {
  user: {
    email: string;
    image: string;
    name: string;
  };
}

export default function Dashboard({ user }: Props) {
  return (
    <>
      <Container title="Dashboard">
        <div className="flex items-center justify-center mt-32">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2">
                <Image
                  src={user.image.split("=")[0]}
                  alt={user.name + " Image"}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <h1 className="text-gray-900 text-3xl font-semibold">
                  {user.name}
                </h1>
              </div>
              <button className="bg-rose-500 hover:bg-rose-600  text-white font-semibold rounded-md px-2 py-2 shadow-2xl">
                Create Note
              </button>
            </div>
            <Notes />
          </div>
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  if (!session?.user)
    return {
      redirect: {
        destination: "/auth/login",
        permament: true,
      },
    };

  return {
    props: {
      user: session.user,
    },
  };
};
