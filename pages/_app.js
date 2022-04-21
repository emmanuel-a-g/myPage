import "../styles/index.css";
import Layout from "../components/layout/layout";
import Head from "next/head";
import { ContextProvider } from "../components/context/myContext";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
