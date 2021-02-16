import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { InitOptions } from "next-auth";
import Providers from "next-auth/providers";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT secret missing");
}

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
  jwt: { secret: process.env.JWT_SECRET },
  session: { jwt: true },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
