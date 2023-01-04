import Head from "@/components/Head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/themes.css";
import { Analytics } from "@vercel/analytics/react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute(
        "data-theme",
        theme
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Tyler Fretz | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
};

export default App;