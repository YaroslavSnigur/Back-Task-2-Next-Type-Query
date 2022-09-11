import "../styles/globals.css";
import Layout from "../components/LayOut/LayOut";
import React from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
