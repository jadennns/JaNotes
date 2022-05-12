import Container from "../../components/containers/Container";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";

export default function Login() {
  return (
    <>
      <Container title="Login">
        <div className="flex items-center justify-center mt-[10rem]">
          <div className="flex flex-col items-center space-y-3">
            <Link href={"/api/auth/callback/google"}>
              <button className="flex items-center justify-center space-x-2 text-gray-900 font-semibold border border-gray-900 w-[20rem] px-2 py-2 rounded-md">
                <FcGoogle size={20} />
                <p>Sign in with google</p>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  if (session?.user)
    return {
      redirect: {
        destination: "/dashboard",
        permanent: true,
      },
    };

  return {
    props: {},
  };
};
