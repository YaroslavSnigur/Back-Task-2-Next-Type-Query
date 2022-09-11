import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
