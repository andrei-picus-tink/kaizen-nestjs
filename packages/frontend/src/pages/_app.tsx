/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;

  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
