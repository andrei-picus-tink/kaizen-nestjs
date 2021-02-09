import { getProviders, signIn, signOut, useSession } from "next-auth/client";
import { GetStaticProps } from "next";
import React from "react";

type Props = {
  providers: any;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const providers = await getProviders();

  if (!providers) {
    throw new Error("no providers");
  }

  return {
    props: { providers },
  };
};

export default function SignIn({ providers }: Props) {
  const [session, isLoading] = useSession();

  if (isLoading) return <span>...</span>;

  if (!session)
    return (
      <>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button type="button" onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    );

  return (
    <>
      {session.user.name}
      <button type="button" onClick={() => signOut()}>
        Log out{" "}
      </button>
    </>
  );
}
