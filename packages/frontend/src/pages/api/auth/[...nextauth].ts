import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: InitOptions = {
  providers: [
    Providers.Credentials({
      name: "DEV",
      id: "dev",
      credentials: {},
      authorize: async () => ({
        name: "dev",
        email: "dev@localhost",
        image: "dev.png",
      }),
    }),
  ],
  session: { jwt: true },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
